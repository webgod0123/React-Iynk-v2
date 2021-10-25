import React from "react";
import ReactSelect from "../shared/ReactSelect";

export type TSort = { label: string; value: string };

interface SortProps {
  sortAttributes: TSort[];
  entity: string;
  setListings?: React.Dispatch<any>;
  pageSize: string | number;
  setIsLoading?: React.Dispatch<boolean>;
  sort?: string;
  setSort?: React.Dispatch<any>;
}

const Sort = ({
  sortAttributes,
  entity,
  setListings,
  pageSize,
  setIsLoading,
  setSort,
  sort,
}: SortProps) => {
  const [chosenSort, setChosenSort] = React.useState();

  return (
    <div className="col-md-4 mb-4" style={{ paddingLeft: 50 }}>
      <ReactSelect
        options={sortAttributes}
        onChange={(event) => setSort(event.value)}
        selectClassName="sort-select-container"
        classNamePrefix="sort-select"
        id="sort-react-select"
        name="sort-react-select"
        placeholder="Sort by..."
        defaultOption={sort}
      />
    </div>
  );
};

export default Sort;
