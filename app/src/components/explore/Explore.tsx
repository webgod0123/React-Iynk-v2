import React from "react";
import Filters from "../filters/Filters";
import { TfilterAttribute } from "../filters/FilterAttributes";
import { TSort } from "./Sort";
import Sort from "./Sort";
import Flex from "../shared/Flex";
import { TAttribute } from "./ListingItem";
import ListingItem from "./ListingItem";
import Paginate from "../shared/Paginate";
import Image from "../shared/Image";
import Image1 from "../../assets/images/image1.png";
import Image2 from "../../assets/images/image2.png";
import Image3 from "../../assets/images/image3.png";
import Image4 from "../../assets/images/image4.png";
import Loading from "../shared/Loading";
import { handleFilterChange } from "../../functions/api/Filters";

interface ExploreProps {
  cssClasses?: string[];
  styles?: { [key: string]: string };
  header: string;
  entity: string;
  filterAttributes: TfilterAttribute[];
  sortAttributes: TSort[];
  primaryAttribute: TAttribute; //used to query db
  otherAttributes: TAttribute[];
  pageSize: string | number;
  actionComponents: React.ReactNode[];
}

const Explore = ({
  header,
  entity, //e.g. dj
  filterAttributes,
  sortAttributes,
  primaryAttribute,
  otherAttributes,
  pageSize, //The number of listing items to display
  actionComponents,
}: ExploreProps) => {
  const [listings, setListings] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [maxPageNumber, setMaxPageNumber] = React.useState<number>();
  const [filters, setFilters] = React.useState({});
  const [sort, setSort] = React.useState<string>();

  const setFilterOptions = (filter) => {
    setFilters({ ...filters, ...{ [filter.key]: filter.value } });
  };

  const getListings = async () => {
    // uses 'entity', 'primaryAttribute' and 'otherAttributes to get data'
    // also need to get any images at this point.
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

  const getMaxPageNumber = async () => {
    const num = await 3;
    setMaxPageNumber(num);
  };

  React.useEffect(
    () => {
      handleFilterChange(filters);
    },
    [filters]
  )

  React.useEffect(
    () => {
      console.log('handle sort change');

    },
    [sort]
  )

  React.useEffect(() => {
    getMaxPageNumber();
    getListings().then((res) => {
      setListings(res);
      setTimeout(() => setIsLoading(false), 5000)
      // setIsLoading(false);
    });
  }, [pageNumber]);

  const functionToGetImage = async (image) => {
    const src = await image.src;
    return src;
  };

  const listingsImageMapper = (listing, index) => {
    return (
      listing.images &&
      listing.images.map((item) => (
        <Image
          item={item}
          // probably want to get images in the function 'getListings'
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
    <div className="page-content main-content">
      <h1>
        <b>{header}</b>
      </h1>
      <Flex
        cssClasses={["row", "px-2", "filters"]}
        styles={{ marginTop: "20px" }}
        alignItems="flex-start"
        justifyContent="space-between"
        direction="row"
      >
        <Filters
          filterAttributes={filterAttributes}
          entity={entity}
          pageSize={pageSize}
          filters={filters}
          setFilters={setFilterOptions}
          clearFilters={() => setFilters({})}
        />
        <Sort
          sortAttributes={sortAttributes}
          entity={entity}
          pageSize={pageSize}
          sort={sort}
          setSort={setSort}
        />
      </Flex>
      <Flex
        alignItems="flex-start"
        justifyContent="space-between"
        direction="row"
        cssClasses={["row", "mt-4", "px-2", "listing-group"]}
      >
        {isLoading ? <Loading component styles={{minHeight: '20vh'}}/> :
          <>{listings &&
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
          </>
        }
      </Flex>
      <Paginate
        maxPageNumber={maxPageNumber}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        cssClasses={["py-4"]}
        styles={{ margin: "40px 0 80px" }}
      />
    </div>
  );
};

export default Explore;
