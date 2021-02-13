import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #929292;
  border-radius: 15px;
  max-width: 310px;
  min-height: 350px;
  width: 100%;
  margin: 20px auto;
`;

export const ContentWrap = styled.div`
  text-align: left;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-family: Montserrat;
  font-weight: bold;
`;

export const Tickets = styled.p`
  font-size: 16px;
  font-family: Arial, sans-serif;
  font-weight: 400;
`;
