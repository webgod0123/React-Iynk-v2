import React from "react";
import Flex from "../shared/Flex";

export type TAttribute = {
  value: string;
  label: string | boolean; //false if don't want to display attribute name
};

interface ListingItemProps {
  images: React.ReactNode[];
  primaryAttribute: TAttribute;
  otherAttributes: TAttribute[];
  actionComponents: React.ReactNode[]; //max 2
}

const ListingItem = ({
  images,
  primaryAttribute,
  otherAttributes, //maximum of 4 attributes
  actionComponents, //maximum of 2 components
}: ListingItemProps) => {
  // css classes should be hard coded in this component
  return (
    <div className="col-md-6" style={{ marginBottom: 40 }}>
      <div>{images.map((image) => image)}</div>
      <h2 className="font-weight-bold mt-4">{primaryAttribute.value}</h2>
      <div className="mt-4">
        {otherAttributes.map((component, index) => (
          <div key={index} className="font-normal">
            {component.label}: {component.value}
          </div>
        ))}
      </div>
      <Flex alignItems="center" justifyContent="space-between" direction="row">
        {actionComponents.map((component) => component)}
      </Flex>
    </div>
  );
};

export default ListingItem;
