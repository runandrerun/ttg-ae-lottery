import React, {useContext} from 'react';
import {WelcomePanel} from '../../components';
import {DataContext} from '../../context';


export default function WelcomePanelContainer() {

  const { currentUser } = useContext(DataContext);

  return (
    <WelcomePanel>
      <WelcomePanel.Header>{currentUser.username}</WelcomePanel.Header>
    </WelcomePanel>
  );
};
