import React from "react";
import Explore from "../components/explore/Explore";
import NavigationBar from "../components/NavigationBar";
import { TfilterAttribute } from "../components/filters/FilterAttributes";
import { TSort } from "../components/explore/Sort";
import Button from "../components/shared/Button";
import { messageOnClick } from "../functions/explore/ActionComponents";
import Footer from "../components/Footer";

const DJExplore = () => {
  const filterAttributes: TfilterAttribute[] = [
    {
      attribute: { label: "No.Events", value: "numEvents" },
      attributeType: "numberRange",
    },
    {
      attribute: { label: "Region", value: "region" },
      attributeType: "singleString",
    },
    {
      attribute: { label: "Genres", value: "genres" },
      attributeType: "multiString",
    },
    {
      attribute: { label: "Verified", value: "verified" },
      attributeType: "boolean",
    },
  ];

  const primaryAttribute = { value: "name", label: false };
  const otherAttributes = [
    { value: "region", label: "Region" },
    { value: "numEvents", label: "Number Of Events" },
  ];

  const listingItemActionComponents = [
    <Button //message button
      cssClasses={["btn", "btn-black", "mt-4"]}
      onClick={messageOnClick}
      key={Math.random() * 10000}
    >
      <span>Message</span>
    </Button>,
  ];

  const sortAttributes = [
    { label: "Number of Events (Low->High)", value: "numEvents" },
    { label: "Number of Events (High->Low)", value: "-numEvents" },
    { label: "Name (A->Z)", value: "name" },
    { label: "Name (Z->A)", value: "-name" },
    { label: "Region (A->Z)", value: "region" },
    { label: "Region (Z->A)", value: "-region" },
  ];

  return (
    <div>
      <NavigationBar userSignedIn={true} />
      <Explore
        cssClasses={[]}
        styles={{}}
        header="DJ's"
        entity="dj"
        filterAttributes={filterAttributes}
        sortAttributes={sortAttributes}
        primaryAttribute={primaryAttribute}
        otherAttributes={otherAttributes}
        pageSize={20}
        actionComponents={listingItemActionComponents}
      />
      <Footer />
    </div>
  );
};

export default DJExplore;
