import React, {useContext} from 'react';
import {Show, Button} from '../../components';
import {ShowsContext} from '../../context';

export default function ShowingsContainer() {
  const { showsList } = useContext(ShowsContext);
  console.log(showsList)
  return (
    <Show>
      {
        showsList.map(({id, title, tickets}) => {
          return (
            <Show.Card key={id + title}>
              <Show.Title>{title}</Show.Title>
              <Show.Tickets>{tickets}</Show.Tickets>
              <Button>
                Click here
              </Button>
            </Show.Card>
          )
        })
      }
    </Show>
  );
};
