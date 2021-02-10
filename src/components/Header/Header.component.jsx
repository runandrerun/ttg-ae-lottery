import React from 'react';
import {
  Container,
  Anchor,
  ButtonsContainer,
  ButtonLink
} from './Header.styles';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function Header({ children, ...restProps }) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Header.ButtonLink = function HeaderButtonLnk({ children, ...restProps }) {
  return (
    <ButtonLink {...restProps}>{children}</ButtonLink>
  );
};

Header.ButtonsContainer = function HeaderButtonsContainer({ children, ...restProps }) {
  return (
    <ButtonsContainer {...restProps}>
      <span></span>
      {children}
    </ButtonsContainer>
  );
};

Header.Anchor = function HeaderAnchor({ children, ...restProps }) {
  return (
    <Anchor {...restProps}>{children}</Anchor>
  );
};
