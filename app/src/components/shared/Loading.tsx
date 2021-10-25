import React from "react";
import Flex from "./Flex";

interface loadingProps {
  component?: boolean;
  styles?: any
}

const Loading = ({ component, styles }: loadingProps) => {
  return (
    <>
      {component ? 
        <Flex  styles={{...styles, width: '100%', height: '100%'}}
          justifyContent='center' alignItems='center' direction='column'>
          <div className='spinner-border text-primary' style={{height: '3rem', width: '3rem'}} role='status'>
            <span className='sr-only'/>
          </div>
        </Flex>
        :
        <div className="spinner-container" style={{...styles}} >
          <div className="spinner">
            <div className="spinner-border text-info" />
          </div>
        </div>
      }
    </>
  );
};

export default Loading;
