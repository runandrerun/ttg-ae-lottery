import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const InnerWrap = styled.div`
  text-align: left;
  padding: 100px;
  /* margin: 0 auto; */

  @media (max-width: 1000px) {
    padding: 25px;
  }
`;

export const Header = styled.h1`
  font-size: 36px;
  font-weight: 600;

  @media (max-width: 1000px) {
    font-size: 28px;
  }
`;

export const SubHeader = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin-top: 15px;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;
