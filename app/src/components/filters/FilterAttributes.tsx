import React from "react";
import BooleanFilter from "./BooleanFilter";
import MultiStringFilter from "./MultiStringFilter";
import NumberRangeFilter from "./NumberRangeFilter";
import SingleStringFilter from "./SingleStringFilter";

export type TfilterAttribute = {
  attribute: { value: string; label: string };
  attributeType: "numberRange" | "singleString" | "multiString" | "boolean";
};

const FilterAttributes = ({
  filterAttributesArray,
  setFilters,
  filters,
}: {
  filterAttributesArray: TfilterAttribute[];
  setFilters: React.Dispatch<{ key: string; value: any }>;
  filters: any;
}) => {
  // generates the appropriate UI component, depending on the type of the attribute.
  // then returns a JSX component containing all the filters.

  const getFilterUi = (filterObj, index) => {
    switch (filterObj.attributeType) {
    case "boolean":
      return (
        <BooleanFilter
          key={index}
          cssClasses={["col-md-3"]}
          filterAttribute={filterObj}
          setFilters={setFilters}
          filters={filters}
        />
      );
    case "multiString":
      return (
        <MultiStringFilter
          key={index}
          cssClasses={["col-md-4", "mb-3"]}
          filterAttribute={filterObj}
          setFilters={setFilters}
          filters={filters}
        />
      );
    case "numberRange":
      return (
        <NumberRangeFilter
          key={index}
          cssClasses={["col-md-4", "mb-3"]}
          filterAttribute={filterObj}
          setFilters={setFilters}
          filters={filters}
        />
      );
    case "singleString":
      return (
        <SingleStringFilter
          key={index}
          cssClasses={["col-md-4", "mb-3"]}
          filterAttribute={filterObj}
          setFilters={setFilters}
          filters={filters}
        />
      );
    }
  };

  return (
    <>
      {filterAttributesArray.map((filterObj, index) =>
        getFilterUi(filterObj, index)
      )}
    </>
  );
};

export default FilterAttributes;
