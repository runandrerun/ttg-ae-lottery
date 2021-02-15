import React from 'react';
import {
  Container,
  InnerWrap,
  Copy
} from './Content.styles';

export default function Content({children, ...restProps}) {
  return (
    <Container {...restProps}>
      <InnerWrap>
        {children}
        </InnerWrap>
    </Container>
  );
};

Content.Copy = function ContentCopy({children, ...restProps}) {
  return (
    <Copy {...restProps}>{children}</Copy>
  );
};
