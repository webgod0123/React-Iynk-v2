import React, { useEffect, useState } from "react";
import { TfilterAttribute } from "./FilterAttributes";
import Flex from "../shared/Flex";

export interface UIFilterProps {
  cssClasses?: string[];
  styles?: { [key: string]: string };
  filterAttribute: TfilterAttribute;
  setFilters: React.Dispatch<{ key: string; value: any }>;
  filters: any;
}

const BooleanFilter = (props: UIFilterProps) => {
  const [boolean, setBoolean] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!props.filters[props.filterAttribute.attribute.value]) {
      setBoolean(false);
      setActive(false);
    } else {
      setActive(true);
      setBoolean(props.filters[props.filterAttribute.attribute.value]);
    }
  }, [props.filters]);

  const booleanChecked = (checked) => {
    setBoolean(checked);
    props.setFilters({
      key: props.filterAttribute.attribute.value,
      value: checked ? checked : null,
    });
  };

  return (
    <div
      style={props.styles}
      className={props.cssClasses ? props.cssClasses.join(" ") : ""}
    >
      <Flex
        cssClasses={[
          active ? "filter-tab active" : "filter-tab",
          "font-normal",
          "cursor-pointer",
          "d-flex",
          "check-form",
          "mb-3",
        ]}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <input
          type="checkbox"
          id="verify"
          checked={boolean}
          onChange={(event) => {
            booleanChecked(event.target.checked);
          }}
        />
        <label htmlFor="verify">{props.filterAttribute.attribute.label}</label>
      </Flex>
    </div>
  );
};

export default BooleanFilter;
