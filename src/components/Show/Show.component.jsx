import React, {useState, useContext, useCallback} from 'react';
import {
  Container,
  Card,
  ContentWrap,
  Title,
  Tickets,
  ButtonsContainer,
  EntryButton,
  LottoButton
} from './Show.styles';
import {DataContext} from '../../context';
import {doesEntryExist, filterWinner} from '../../utils';
import usersData from '../../constants/users.json';

export default function Show({children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  );
};

Show.Card = function ShowCard({children, ...restProps}) {
  return (
    <Card {...restProps}>
      <ContentWrap>
        {children}
      </ContentWrap>
    </Card>
  );
};

Show.Title = function ShowTitle({children, ...restProps}) {
  return (
    <Title {...restProps}>{children}</Title>
  );
};

Show.Tickets = function ShowTickets({children, ...restProps}) {
  return (
    <Tickets {...restProps}>Tickets Available: {children}</Tickets>
  );
};

Show.ButtonsContainer = function ShowButtonsContainer({children, ...restProps}) {
  return (
    <ButtonsContainer {...restProps}>{children}</ButtonsContainer>
  );
};

Show.EntryButton = function ShowEntryButton({showId, children, ...restProps}) {

  const { currentUser, setCurrentUser, setUsers, showsList, setShowsList } = useContext(DataContext);

  const handleClick = (e) => {
    e.preventDefault();
    updateCurrentUser();
    updateCurrentShow();
  };

  const updateCurrentUser = useCallback(() => {
   return setCurrentUser(prevCurrentUser => {
     return {
       ...prevCurrentUser,
       lotteryEntry: [
         ...prevCurrentUser.lotteryEntry, showId
       ]
     };
   });
 }, [setCurrentUser]);

  const updateCurrentShow = useCallback(() => {
    return setShowsList(prevShowsList => {
      return prevShowsList.map(show => {
        if (show.id === showId) {
          return (
            {
              ...show,
              usersEntered: [ ...show.usersEntered, currentUser.id ]
            }
          )
        } else {
          return show;
        }
      })
    });
  }, [setShowsList]);

  return (
    <EntryButton
      {...restProps}
      onClick={handleClick}
      disabled={doesEntryExist(currentUser, showId)}
    >
      {doesEntryExist(currentUser, showId) ? "Entered" : "Enter Lottery" }
    </EntryButton>
  );
};

Show.LottoButton = function ShowLottoButton({showId, tickets, usersEntered, children, ...restProps}) {

  const { currentUser, setCurrentUser, users, setUsers, showsList, setShowsList } = useContext(DataContext);

  const [winner, setWinner] = useState(null);
  const [lotteryPlayed, setLotteryPlayed] = useState(false);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setLotteryPlayed(true);
    lotteryPicker();
  });

  const lotteryPicker = useCallback(() => {
    let clonedUsers = usersEntered;
    while (tickets >= 1 && clonedUsers.length >= 1) {
      let selectedUser = users[Math.floor(Math.random() * users.length)];
      didUserWin(selectedUser);
      tickets -= 1;
      let filteredWinners = filterWinner(clonedUsers, selectedUser.username);
      return lotteryPicker(filteredWinners, tickets);
    };
  });

  const didUserWin = (selectedUser) => {
    if (selectedUser.username === currentUser.username) {
      return setWinner(true);
    } else {
      return setWinner(false);
    };
  };

  const copySelect = () => {
    if (winner) {
      return "You won!"
    } else {
      return "Sorry, better luck next time!"
    };
  };

  return (
    <LottoButton
      {...restProps}
      onClick={handleClick}
      disabled={lotteryPlayed}
    >
      {winner === true || winner === false ?  copySelect() : "Play lottery"}
    </LottoButton>
  );
};
