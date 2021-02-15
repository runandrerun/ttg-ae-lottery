import React, {useState, useEffect} from 'react';
import {
  HeroContainer,
  ShowsContainer,
  WelcomePanelContainer
} from '../../containers';
import {Loading} from '../../components';
import {DataContext} from '../../context';
import showsData from '../../constants/shows.json';
import usersData from '../../constants/users.json';
import {lotteryPicker} from '../../utils';
import {PageWrap} from '../../hocs';

export const Home = () => {

  const [showsList, setShowsList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setCurrentUser(usersData.users[0]);
    setUsers(usersData.users);
    setShowsList(showsData.shows);
    setLoading(false);
  }, []);

  return (
    <section id="home">
        <HeroContainer
          header={"All shows in New York"}
          subheader={"We have a theater seat for everyone — no matter the show."}
        />
        <DataContext.Provider value={{ currentUser, setCurrentUser, users, setUsers, showsList, setShowsList }}>
          {
            !isLoading ?
            <WelcomePanelContainer />
            : <Loading />
          }
          {
            !isLoading && showsList ?
            <ShowsContainer
              shows={showsList}
            />
            : <Loading />
          }
        </DataContext.Provider>
    </section>
  );
};

export default PageWrap(Home);
