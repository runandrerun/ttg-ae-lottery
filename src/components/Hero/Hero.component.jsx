import React from 'react';
import {
  Container,
  InnerWrap,
  Header,
  SubHeader
} from './Hero.styles';

export default function Hero({children, ...restProps}) {
  return (
    <Container {...restProps}>
      <InnerWrap>
        {children}
      </InnerWrap>
    </Container>
  );
};

Hero.Header = function HeroHeader({children, ...restProps}) {
  return (
    <Header {...restProps}>{children}</Header>
  );
};

Hero.SubHeader = function HeroSubHeader({children, ...restProps}) {
  return (
    <SubHeader {...restProps}>{children}</SubHeader>
  );
};
