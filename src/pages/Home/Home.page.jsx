import React, {useState, useEffect} from 'react';
import {
  HeroContainer,
  ShowsContainer
} from '../../containers';
import { Loading } from '../../components';
import { ShowsContext } from '../../context';
import data from '../../constants/shows.json';
import {lotteryPicker} from '../../utils';
import { PageWrap } from '../../hocs';

export const Home = () => {

  const [showsList, setShowsList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setShowsList(data.shows);
    setLoading(false);
  }, []);

  return (
    <section id="home">
      <ShowsContext.Provider value={{ showsList, setShowsList }}>
        <HeroContainer
          header={"All shows in New York"}
          subheader={"We have a theater seat for everyone — no matter the show."}
        />
        {
          !isLoading ?
          <ShowsContainer />
          : <Loading />
        }
      </ShowsContext.Provider>
    </section>
  );
};

export default PageWrap(Home);
