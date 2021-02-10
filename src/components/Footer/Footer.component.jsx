import React from 'react';
import {
  Container,
  InnerWrap,
  Disclaimer,
  ContentWrap,
  Copy,
  Link
} from './Footer.styles';
import * as ROUTES from '../../constants/routes';

export default function Footer({children, ...restProps}) {
  return (
    <Container {...restProps}>
      <InnerWrap>
        {children}
      </InnerWrap>
    </Container>
  );
};

Footer.ContentWrap = function FooterContentWrap({children, ...restProps}) {
  return (
    <ContentWrap {...restProps}>{children}</ContentWrap>
  );
};

Footer.Copy = function FooterCopy({children, ...restProps}) {
  return (
    <Copy {...restProps}>{children}</Copy>
  );
};

Footer.Link = function FooterLink({children, ...restProps}) {
  return (
    <Link {...restProps}>{children}</Link>
  );
};

Footer.Disclaimer = function FooterDisclaimer({children, ...restProps}) {
  return (
    <Disclaimer {...restProps}>{children}</Disclaimer>
  );
};
