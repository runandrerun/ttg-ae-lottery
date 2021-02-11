import React, {useState, useEffect} from 'react';
import {
  HeroContainer,
  ShowingsContainer
} from '../../containers';
import { Loading } from '../../components';
import data from '../../constants/shows.json';
import {PageWrap} from '../../hocs';

export const Home = () => {

  const [showingsList, setShowingsList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setShowingsList(data.shows);
    setLoading(false);
  }, []);

  return (
    <section id="home">
      <HeroContainer
        header={"All shows in New York"}
        subheader={"We have a theater seat for everyone — no matter the show."}
      />
      <Loading />
      {
        !isLoading ?
        <ShowingsContainer />
        : <Loading />
      }
    </section>
  );
};

export default PageWrap(Home);
