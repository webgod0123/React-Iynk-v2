import React from "react";
import Select, { components, defaultTheme } from "react-select";

// Documentation: https://react-select.com/home

type OptionType = {
  label: string;
  value: string;
};

interface ReactSelectProps {
  options: OptionType[];
  onChange: (option: OptionType) => void;
  selectClassName?: string;
  isClearable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  id: string;
  name: string;
  placeholder?: string;
  styles?: { [key: string]: string }; //used for styling the component
  classNamePrefix: string;
  children?: React.ReactNode;
  defaultOption: string;
}

const ReactSelect = ({
  options,
  onChange,
  selectClassName,
  isClearable,
  isDisabled,
  isLoading,
  id,
  name,
  placeholder,
  styles,
  classNamePrefix, //https://react-select.com/styles#using-classnames
  children,
  defaultOption,
}: ReactSelectProps) => {
  // used to make sorts dropdown menu
  // please do as much styling as possible using the classNamePrefix, put css in _modal.css
  return (
    <div>
      <Select
        options={options}
        isClearable={isClearable}
        isDisabled={isDisabled}
        className={selectClassName}
        classNamePrefix={classNamePrefix} //https://react-select.com/styles#using-classnames
        id={id}
        name={name}
        placeholder={placeholder}
        styles={styles}
        onChange={onChange}
        defaultValue={options.find((option) => option.value == defaultOption)}
      />
    </div>
  );
};

export default ReactSelect;
