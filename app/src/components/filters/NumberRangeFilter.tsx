import React, { useEffect, useState } from "react";
import { UIFilterProps } from "./BooleanFilter";
import Flex from "../shared/Flex";
import Image from "../shared/Image";
import Arrow from "../../assets/images/Vector.svg";
import Arrow1 from "../../assets/images/Vector1.svg";
import CustomModal from "../shared/CustomModal";
import Button from "../shared/Button";

const NumberRangeFilter = (props: UIFilterProps) => {
  const [minNum, setMinNum] = useState("");
  const [maxNum, setMaxNum] = useState("");
  const [active, setActive] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    if (!props.filters[props.filterAttribute.attribute.value]) {
      setMinNum("");
      setMaxNum("");
      setActive(false);
    } else {
      setActive(true);
      setMaxNum(props.filters[props.filterAttribute.attribute.value].max);
      setMinNum(props.filters[props.filterAttribute.attribute.value].min);
    }
  }, [props.filters]);

  const apply = () => {
    if (Number(minNum) > 0 && Number(maxNum) > 0 && maxNum >= minNum) {
      props.setFilters({
        key: props.filterAttribute.attribute.value,
        value: {
          min: minNum,
          max: maxNum,
        },
      });
      setIsShowModal(false);
    }
  };

  const clear = () => {
    if (Number(minNum) > 0 && Number(maxNum) > 0) {
      props.setFilters({
        key: props.filterAttribute.attribute.value,
        value: null,
      });
      setIsShowModal(false);
    }

    setMinNum("");
    setMaxNum("");
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
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <input
            value={minNum}
            onChange={(event) => setMinNum(event.target.value)}
            type="number"
            className="form-control num-range"
            placeholder="Min"
            min="0"
          />
          <div className="num-range-divider" />
          <input
            value={maxNum}
            onChange={(event) => setMaxNum(event.target.value)}
            type="number"
            className="form-control num-range"
            placeholder="Max"
            min="0"
          />
        </Flex>
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

export default NumberRangeFilter;
