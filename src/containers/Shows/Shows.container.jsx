import React, {useContext} from 'react';
import {Show, Button} from '../../components';

export default function ShowingsContainer({shows}) {

  return (
    <Show>
      {
        shows.map(({id, title, tickets, usersEntered}) => {
          return (
            <Show.Card key={id + title}>
              <Show.Title>{title}</Show.Title>
              <Show.Tickets>{tickets}</Show.Tickets>
              <Show.ButtonsContainer>
                <Show.EntryButton showId={id} />
                <Show.LottoButton showId={id} tickets={tickets} usersEntered={usersEntered}>
                  Run the Lotto!
                </Show.LottoButton>
              </Show.ButtonsContainer>
            </Show.Card>
          )
        })
      }
    </Show>
  );
};
