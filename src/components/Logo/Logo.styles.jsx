import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Container = styled(ReactRouterLink)`
  display: flex;
  vertical-align: center;
  text-decoration: none;
  align-items: left;
`;

export const LogoIcon = styled.img`
  /* filter: brightness(0) invert(1); */
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  transform: translateX(0px);
  transition: all 0.5s ease-in;

  display: inline-block;
  color: #303030;
  &:hover {
    transform: translateX(1rem);
  }

  /* @media (min-width: 1449px) {
    width: 40px;
    height: 40px;
  } */

  @media (max-width: 1000px) {
    width: 45px;
    height: 45px;
  }
`;

export const LogoText = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #303030;
  text-decoration: none;
  vertical-align: center;
  margin: auto 0;

  span {
    font-weight: bold;
  }

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
`;
