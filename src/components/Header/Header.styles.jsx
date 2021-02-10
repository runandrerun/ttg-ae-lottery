import styled from 'styled-components/macro';
import {Link as ReactRouterLink} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  margin-top: 10px;
  height: 80px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &>:first-child, &>:nth-child(2) {
    margin-right: 1rem;
  }
`;

export const Anchor = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  color: #303030;
  position: relative;
  text-decoration: none;
  margin-right: 1rem;
  &:after {
    position: absolute;
    left: 0%;
    content: '';
    height: 2px;
    background: #303030;
    transition: all 0.5s ease-in;
    width: 0;
    bottom: -1px;
  }
  &:hover:after {
    width: 70%;
    left: 0;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
    display: none !important;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #303030;
  position: relative;
  text-decoration: none;
  &:after {
    position: absolute;
    left: 100%;
  	content: '';
  	height: 2px;
    background: #303030;
    transition: all 0.5s ease-in;
    width: 0;
    bottom: -1px;
  }
  &:hover:after {
    width: 70%;
    left: 0;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
    display: none !important;
  }
`;
