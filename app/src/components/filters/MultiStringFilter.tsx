import React, { useEffect, useState } from "react";
import { UIFilterProps } from "./BooleanFilter";
import { TfilterAttribute } from "./FilterAttributes";
import CustomModal from "../shared/CustomModal";
import Flex from "../shared/Flex";
import Image from "../shared/Image";
import Arrow from "../../assets/images/Vector.svg";
import Arrow1 from "../../assets/images/Vector1.svg";
import Button from "../shared/Button";

const MultiStringFilter = (props: UIFilterProps) => {
  const [filterOptions, setFilterOptions] = useState([]);
  const [chosenOptions, setChosenOptions] = useState([]);
  const [active, setActive] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    setFilterOptions(getFilterOptions(props.filterAttribute.attribute.value));
  }, []);

  useEffect(() => {
    if (!props.filters[props.filterAttribute.attribute.value]) {
      let array = filterOptions;
      array.forEach((arr) => {
        arr["checked"] = false;
      });
      setChosenOptions([]);
      setActive(false);
    } else {
      if (props.filters[props.filterAttribute.attribute.value].length > 0) {
        setActive(true);
        let defaultChosenOptions =
          props.filters[props.filterAttribute.attribute.value];
        setChosenOptions(defaultChosenOptions);
        let options = getFilterOptions(props.filterAttribute.attribute.value);
        defaultChosenOptions.forEach((chosenOption) => {
          options.forEach((option) => {
            if (chosenOption == option.value) option.checked = true;
          });
        });
        setFilterOptions(options);
      }
    }
  }, [props.filters]);

  const getFilterOptions = (attribute: string) => {
    const generatedFilterOptions = [
      { label: "Hip-Hop", value: "hip", checked: false },
      { label: "Rock", value: "rock", checked: false },
      { label: "Pop", value: "pop", checked: false },
      { label: "Jazz", value: "jazz", checked: false },
    ];
    return generatedFilterOptions;
  };

  const addChosenOptions = (checked, index, value) => {
    let string = filterOptions[index];
    string["checked"] = checked;
    setFilterOptions([
      ...filterOptions.slice(0, index),
      string,
      ...filterOptions.slice(index + 1),
    ]);

    let option = chosenOptions.find((val) => val === value.value);
    if (!option && checked) setChosenOptions([...chosenOptions, value.value]);
    if (!checked)
      setChosenOptions(chosenOptions.filter((val) => val !== value.value));
  };

  const apply = () => {
    if (chosenOptions.length > 0) {
      props.setFilters({
        key: props.filterAttribute.attribute.value,
        value: chosenOptions,
      });
      setIsShowModal(false);
    }
  };

  const clear = () => {
    if (chosenOptions.length > 0) {
      props.setFilters({
        key: props.filterAttribute.attribute.value,
        value: null,
      });
      setIsShowModal(false);
    }

    setChosenOptions([]);
    let array = filterOptions;
    array.forEach((arr) => {
      arr["checked"] = false;
    });
    setFilterOptions(array);
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
          <div key={index} className="check-form mb-2">
            <input
              type="checkbox"
              checked={filterItem.checked}
              id={filterItem.value}
              value={filterItem.value}
              onChange={(event) =>
                addChosenOptions(event.target.checked, index, filterItem)
              }
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

export default MultiStringFilter;
