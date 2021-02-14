import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  border-top: solid .1rem #E4E4E4
`;

export const InnerWrap = styled.div`
  display: flex;
  margin: 0 56px;
  margin-top: 10px;
  height: 80px;
  padding: 18px 0;
  flex-direction: column;
  align-items: left;

  @media (max-width: 1000px) {
    margin: 0 15px;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 1000px) {
    margin: 15px 0;
  }
`;

export const Link = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0 1rem;

  @media (max-width: 1000px) {
    padding: 0 .5rem;
    font-size: 14px;
  }
`;

export const Copy = styled.p`
  display: flex;
`;

export const Disclaimer = styled.div`
  margin: 15px 0;
  color: #929292;
  font-size: 1rem;
  font-family: Montserrat;
  line-height: 1.4rem;
`;
