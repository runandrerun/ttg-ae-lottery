import React from 'react';
import {
  Container,
  Header
} from './WelcomePanel.styles.jsx';

export default function WelcomePanel({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

WelcomePanel.Header = function WelcomePanelHeader({children, ...restProps}) {
  return (
    <Header {...restProps}>Welcome {children}!</Header>
  );
};
