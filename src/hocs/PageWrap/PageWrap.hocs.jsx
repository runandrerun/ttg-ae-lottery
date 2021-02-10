import React from 'react';
import {
  HeaderContainer,
  FooterContainer
} from '../../containers';

export const PageWrap = (WrappedComponent) => {
  function HOC(props) {
    return (
      <>
        <HeaderContainer />
          <WrappedComponent {...props} />
        <FooterContainer />
      </>
    );
  };
  return HOC;
};

export default PageWrap;
