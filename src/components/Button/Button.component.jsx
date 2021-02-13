import React from 'react';
import {
  Container,
  InnerWrap
} from './Button.styles';

export default function Button({children, ...restProps}) {
  return (
    <Container {...restProps}>
      <InnerWrap>
        {children}
      </InnerWrap>
    </Container>
  );
};

// Button.InnerWrap = function ButtonInnerWrap({children, ...restProps}) {
//   return (
//     <InnerWrap {...restProps}>{children}</InnerWrap>
//   );
// };
