import React from 'react';
import {
  HeroContainer,
  ShowingsContainer
} from '../../containers';
import {PageWrap} from '../../hocs';

export const Home = () => {
  return (
    <HeroContainer
      header={"All shows in New York"}
      subheader={"We have a theater seat for everyone — no matter the show."}
    />
  );
};

export default PageWrap(Home);
