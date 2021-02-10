import React from 'react';
import {Hero} from '../../components';

export default function HeroContainer({header, subheader}) {
  return (
    <Hero>
      <Hero.Header>{header}</Hero.Header>
      <Hero.SubHeader>{subheader}</Hero.SubHeader>
    </Hero>
  );
};
