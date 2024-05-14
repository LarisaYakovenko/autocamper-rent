import React from 'react';
import { Oval } from 'react-loader-spinner';
// import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <div>
      <Oval
        height="100"
        width="100"
        color="#E44848"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      {/* </LoaderContainer> */}
    </div>
  );
};
export default Loader;
