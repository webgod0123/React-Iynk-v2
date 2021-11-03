import React from "react";
import Button from "./Button";
import Flex from "./Flex";
import ArrowLeft from "../../assets/images/arrowRight.svg";
import ArrowRight from "../../assets/images/arrowLeft.svg";
import Image from "./Image";

interface PaginateProps {
  cssClasses?: string[];
  styles?: { [key: string]: string };
  pageNumber: number;
  maxPageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

const Paginate = ({ cssClasses, styles, maxPageNumber, pageNumber, setPageNumber }: PaginateProps) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="row"
      cssClasses={cssClasses}
      styles={styles}
    >
      {pageNumber > 1 &&
        <Button cssClasses={["paginate-btn", "mx-3", "font-normal"]}
          onClick={()=> {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            setPageNumber(prev => prev - 1)
          }}
        >
          <Image src={ArrowLeft} width="11" height="22" />
        </Button>
      }
      {pageNumber < maxPageNumber &&
        <Button cssClasses={["paginate-btn", "mx-3", "font-normal"]}
          onClick={()=>{
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            setPageNumber(prev => prev + 1)
          }}
        >
          <Image src={ArrowRight} width="11" height="22" />
        </Button>
      }
    </Flex>
  );
};

export default Paginate;
