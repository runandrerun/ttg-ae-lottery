import React from 'react';
import {
  Container,
  LogoText,
  LogoIcon
} from './Logo.styles';
import * as ROUTES from '../../constants/routes';

export default function Logo({ ...restProps }) {
  return (
    <Container to={ROUTES.GITHOME}>
      <LogoIcon {...restProps} />
      <LogoText>tmr<span>Tix</span></LogoText>
    </Container>
  );
};
