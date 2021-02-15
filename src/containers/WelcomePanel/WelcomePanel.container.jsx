import React, {useContext} from 'react';
import {WelcomePanel} from '../../components';
import {DataContext} from '../../context';


export default function WelcomePanelContainer() {

  const { currentUser } = useContext(DataContext);

  return (
    <WelcomePanel>
      <WelcomePanel.Header>{currentUser.username}</WelcomePanel.Header>
      {
        currentUser.lotteryEntry.length > 0 ?
        currentUser.lotteryEntry.map(entry => {
          return (
            <div>{entry}</div>
          )
        }) :
        null
      }
    </WelcomePanel>
  );
};
