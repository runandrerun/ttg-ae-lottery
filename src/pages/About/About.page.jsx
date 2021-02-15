import React from 'react';
import {
  HeroContainer,
  ContentContainer
} from '../../containers';
import {PageWrap} from '../../hocs';

export const About = () => {
  return (
    <section id="about">
      <HeroContainer
        header={"About"}
        subheader={"the ttg-ae-lottery app"}
      />
      <ContentContainer
        copy={
          [
            "This is a mini application to demonstrate React, Hooks, and Components",
            "The app also demonstrates the usage of a simple lottery picker.",
            "How it works:",
            "Users are entered into an array associated with the show's data model.",
            "Once the lottery is run, users are chosen at random out of the list, and 1 ticket at a time is removed from the available tickets.",
            "Winner is then filtered out of the list, and the function is called recursively until complete."
          ]
        }
      />
    </section>
  );
};

export default PageWrap(About);
