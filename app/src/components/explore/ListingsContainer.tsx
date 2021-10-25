import React from "react";
import ListingItem from "./ListingItem";
import Paginate from "../shared/Paginate";
import Flex from "../shared/Flex";
import Image from "../shared/Image";
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import Image4 from "../../assets/images/image4.png";
import Loading from "../shared/Loading";
import { TfilterAttribute } from "../filters/FilterAttributes";
import { TAttribute } from "./ListingItem";

interface ListingsContainerProps {
  actionComponents: React.ReactNode[];
  primaryAttribute: TAttribute;
  otherAttributes: TAttribute[];
}

const ListingsContainer = ({
  actionComponents,
  primaryAttribute,
  otherAttributes,
}: ListingsContainerProps) => {
  const getListings = async (primaryAttribute, otherAttributes) => {
    // this is just to simulate fetching data from the backend.
    setIsLoading(true);
    const dummyData = [
      {
        primaryAttribute: { value: "Will", label: false },
        otherAttributes: [
          { value: "Manchester", label: "Region" },
          { value: 100, label: "Number of Events" },
        ],
        images: [{ src: Image1 }],
      },
      {
        primaryAttribute: { value: "Oli", label: false },
        otherAttributes: [
          { value: "London", label: "Region" },
          { value: 80, label: "Number of Events" },
        ],
        images: [{ src: Image2 }],
      },
      {
        primaryAttribute: { value: "Will", label: false },
        otherAttributes: [
          { value: "Manchester", label: "Region" },
          { value: 100, label: "Number of Events" },
        ],
        images: [{ src: Image3 }],
      },
      {
        primaryAttribute: { value: "Oli", label: false },
        otherAttributes: [
          { value: "London", label: "Region" },
          { value: 80, label: "Number of Events" },
        ],
        images: [{ src: Image4 }],
      },
      {
        primaryAttribute: { value: "Will", label: false },
        otherAttributes: [
          { value: "Manchester", label: "Region" },
          { value: 100, label: "Number of Events" },
        ],
        images: [{ src: Image2 }],
      },
      {
        primaryAttribute: { value: "Oli", label: false },
        otherAttributes: [
          { value: "London", label: "Region" },
          { value: 80, label: "Number of Events" },
        ],
        images: [{ src: Image3 }],
      },
    ];

    return dummyData;
  };

  const [listings, setListings] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [maxPageNumber, setMaxPageNumber] = React.useState<number>();

  const getMaxPageNumber = async () => {
    const num = await 3;
    setMaxPageNumber(num);
  };

  React.useEffect(() => {
    getMaxPageNumber();
    getListings(primaryAttribute, otherAttributes).then((res) => {
      setListings(res);
      setIsLoading(false);
    });
  }, [pageNumber]);

  const functionToGetImage = async (image) => {
    // this is just to simulate an async function which fetches an image.
    const src = await image.src;
    return src;
  };

  const listingsImageMapper = (listing, index) => {
    return (
      listing.images &&
      listing.images.map((item) => (
        <Image
          item={item}
          functionToGetImage={functionToGetImage}
          height={"350px"}
          width={"100%"}
          key={`li-img-${index}`}
          styles={{ objectFit: "cover", borderRadius: "10px" }}
        />
      ))
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Flex
            alignItems="flex-start"
            justifyContent="space-between"
            direction="row"
            cssClasses={["row", "mt-4", "px-2", "listing-group"]}
          >
            {listings &&
              listings.map((listing, index) => {
                return (
                  <ListingItem
                    primaryAttribute={listing.primaryAttribute}
                    otherAttributes={listing.otherAttributes}
                    key={`listing-item-${index}`}
                    actionComponents={actionComponents}
                    images={listingsImageMapper(listing, index)}
                  />
                );
              })}
          </Flex>
          <Paginate
            maxPageNumber={maxPageNumber}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            cssClasses={["py-4"]}
            styles={{ margin: "40px 0 80px" }}
          />
        </>
      )}
    </>
  );
};

export default ListingsContainer;
