import React from 'react';
import {
  Container,
  Card,
  ContentWrap,
  Title,
  Tickets
} from './Show.styles';

export default function Show({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Show.Card = function ShowCard({children, ...restProps}) {
  return (
    <Card {...restProps}>
      <ContentWrap>
        {children}
      </ContentWrap>
    </Card>
  );
};

Show.Title = function ShowTitle({children, ...restProps}) {
  return (
    <Title {...restProps}>{children}</Title>
  );
};

Show.Tickets = function ShowTickets({children, ...restProps}) {
  return (
    <Tickets {...restProps}>Tickets Available: {children}</Tickets>
  );
};
