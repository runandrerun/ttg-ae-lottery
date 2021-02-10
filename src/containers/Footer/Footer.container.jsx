import React from 'react';
import {Footer, Logo} from '../../components';
import logo from '../../_assets/img/tickets.svg';

export default function FooterContainer() {
  return (
    <Footer>
      <Logo
        src={logo}
      />
      <Footer.ContentWrap>
        <Footer.Copy>© 2021 TodayTix, Inc. All rights reserved.</Footer.Copy>
        <Footer.Link>Terms of Use Privacy Policy Buyer Guarantee</Footer.Link>
      </Footer.ContentWrap>
      <Footer.Disclaimer>
        Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries and regions. App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.
      </Footer.Disclaimer>
    </Footer>
  );
};
