import React, { useState } from "react";
import { UIFilterProps } from "./BooleanFilter";
import CustomModal from "../shared/CustomModal";
import Flex from "../shared/Flex";
import Image from "../shared/Image";
import Arrow from "../../assets/images/Vector.svg";
import Arrow1 from "../../assets/images/Vector1.svg";
import { TfilterAttribute } from "./FilterAttributes";
import Button from "../shared/Button";

const SingleStringFilter = (props: UIFilterProps) => {
  const [chosenStringFilter, setChosenStringFilter] = useState("");
  const [filterOptions, setFilterOptions] = useState<
    TfilterAttribute["attribute"][]
  >([]);
  const [active, setActive] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  React.useEffect(() => {
    getFilterOptions(props.filterAttribute.attribute.value);
    if (!props.filters[props.filterAttribute.attribute.value])
      setChosenStringFilter("");
  }, []);

  React.useEffect(() => {
    if (!props.filters[props.filterAttribute.attribute.value]) {
      setChosenStringFilter("");
      setActive(false);
    } else {
      setActive(true);
      setChosenStringFilter(
        props.filters[props.filterAttribute.attribute.value]
      );
    }
  }, [props.filters]);

  const getFilterOptions = (attribute: string) => {
    // simulating fetching data from database and generating options.
    // set the state with below object.
    const generatedFilterOptions = [
      { label: "Manchester", value: "manchester" },
      { label: "London", value: "london" },
      { label: "Leeds", value: "leeds" },
    ];
    setFilterOptions(generatedFilterOptions);
    //
  };

  const apply = () => {
    if (chosenStringFilter) {
      props.setFilters({
        key: props.filterAttribute.attribute.value,
        value: chosenStringFilter,
      });
      setIsShowModal(false);
    }
  };

  const clear = () => {
    if (chosenStringFilter) {
      props.setFilters({
        key: props.filterAttribute.attribute.value,
        value: null,
      });
      setIsShowModal(false);
    }

    setChosenStringFilter("");
  };

  return (
    <div className={props.cssClasses ? props.cssClasses.join(" ") : ""}>
      <CustomModal
        position="bottom left"
        isShowModal={isShowModal}
        triggerComponent={
          <div onClick={() => setIsShowModal(true)}>
            <Flex
              cssClasses={[
                active ? "filter-tab active" : "filter-tab",
                "font-normal",
                "cursor-pointer",
                "d-flex",
              ]}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <span>{props.filterAttribute.attribute.label}</span>
              <Image width="12" height="8" src={active ? Arrow1 : Arrow} />
            </Flex>
          </div>
        }
      >
        {filterOptions.map((filterItem, index) => (
          <div className="mb-2" key={index}>
            <input
              onChange={(event) => setChosenStringFilter(event.target.value)}
              type="radio"
              id={filterItem.value}
              value={filterItem.value}
              name="region-group"
              checked={chosenStringFilter === filterItem.value}
            />
            <label htmlFor={filterItem.value}>{filterItem.label}</label>
          </div>
        ))}
        <Flex
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          cssClasses={["d-flex", "mt-4"]}
        >
          <Button cssClasses={["btn", "btn-white"]} onClick={clear}>
            <span>Clear</span>
          </Button>
          <Button
            cssClasses={["btn", "btn-black"]}
            styles={{ marginLeft: "15px" }}
            onClick={apply}
          >
            <span>Apply</span>
          </Button>
        </Flex>
      </CustomModal>
    </div>
  );
};

export default SingleStringFilter;
