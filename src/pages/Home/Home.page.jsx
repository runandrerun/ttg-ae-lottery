import React, {useState, useEffect} from 'react';
import {
  HeroContainer,
  ShowsContainer,
  WelcomePanelContainer
} from '../../containers';
import { Loading } from '../../components';
import { ShowsContext } from '../../context';
import showsData from '../../constants/shows.json';
import userData from '../../constants/users.json';
import {lotteryPicker} from '../../utils';
import { PageWrap } from '../../hocs';

export const Home = () => {

  const [showsList, setShowsList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentUser(userData.users[0])
    setShowsList(showsData.shows);
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
          <WelcomePanelContainer user={currentUser} />
          : <Loading />
        }
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
