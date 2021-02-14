import React from 'react';
import {WelcomePanel} from '../../components';

export default function WelcomePanelContainer({user}) {
  return (
    <WelcomePanel>
      <WelcomePanel.Header>{user.username}</WelcomePanel.Header>
    </WelcomePanel>
  );
};
