import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;

  @media (max-width: 1000px) {
    padding: 0 15px;
  }
`;

export const Copy = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.1;
  margin: 15px 0;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }

  &:last-of-type {
    margin-bottom: 80px;
  }
`;
