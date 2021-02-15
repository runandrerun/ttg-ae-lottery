import React, {useContext, useCallback} from 'react';
import {
  Container,
  InnerWrap
} from './Button.styles';
import {UsersContext} from '../../context';
import {updateUserLotteryEntry} from '../../utils';

export default function Button({showId, children, ...restProps}) {

  const { currentUser, setCurrentUser } = useContext(UsersContext);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    let updatedUser = currentUser.lotteryEntry.push(showId);
    setCurrentUser(updatedUser)
  }, [setCurrentUser]);


  return (
    <Container {...restProps}>
      <InnerWrap onClick={handleClick}>
        {children}
      </InnerWrap>
    </Container>
  );
};
