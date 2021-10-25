import React from "react";
import { handleFilterChange } from "../../functions/api/Filters";
import Button from "../shared/Button";
import FilterAttributes from "./FilterAttributes";
import { TfilterAttribute } from "./FilterAttributes";

interface FiltersProps {
  header?: string;
  filterAttributes: TfilterAttribute[];
  entity: string;
  setListings?: React.Dispatch<any>;
  pageSize: string | number;
  setIsLoading?: React.Dispatch<boolean>;
  setFilters?: React.Dispatch<any>;
  filters?: any;
  clearFilters?: React.Dispatch<any>;
}

const Filters = ({
  header,
  filterAttributes,
  entity,
  setListings,
  pageSize,
  setIsLoading,
  setFilters,
  filters,
  clearFilters,
}: FiltersProps) => {
  return (
    <div className="col-md-8">
      <div className="row">
        <FilterAttributes
          setFilters={setFilters}
          filterAttributesArray={filterAttributes}
          filters={filters}
        />
        <div className="col-md-9">
          {!Object.values(filters).every((x) => x === null || x === "") ? (
            <Button //clear filter button
              cssClasses={["btn", "btn-black", "mb-3"]}
              onClick={() => clearFilters({})}
            >
              <span>Clear all</span>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Filters;
