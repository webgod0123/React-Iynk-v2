import React from "react";
import Loading from "./Loading";

interface ImageProps {
  height: string;
  width: string;
  cssClasses?: string[];
  styles?: { [key: string]: string }; //for inline styling
  handleClick?: () => any; // the function that gets triggered when the image is clicked.
  src?: any; //string where for image src
  functionToGetImage?: (item) => Promise<string>;
  item?: any; //used in functionToGetImage
}

const Image = ({
  height,
  width,
  cssClasses,
  styles,
  handleClick,
  src,
  functionToGetImage,
  item,
}: ImageProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(
    functionToGetImage ? true : false
  );
  const [srcFromFunction, setSrcFromFunction] = React.useState<string>();

  const getImageFromFunction = async (item) => {
    const imageSrc = await functionToGetImage(item);
    setSrcFromFunction(imageSrc);
    setIsLoading(false);
  };

  React.useEffect(() => {
    if (functionToGetImage) getImageFromFunction(item);
  }, []);

  return (
    <>
      {functionToGetImage ? (
        isLoading ? (
          <Loading component={false} />
        ) : (
          <img
            width={width}
            height={height}
            src={srcFromFunction}
            style={styles}
            className={cssClasses ? cssClasses.join(" ") : ""}
          />
        )
      ) : (
        <img
          width={width}
          height={height}
          src={src}
          style={styles}
          className={cssClasses ? cssClasses.join(" ") : ""}
        />
      )}
    </>
  );
};

export default Image;
