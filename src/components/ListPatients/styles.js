import styled from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  padding-top: 50px;

  color: #1d6631;
`;

export const Card = styled.div`
  width: 25%;
  height: 15%;
  padding: 5px;
  border-radius: 15px;
  background-color: #b5f9c8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    margin: 15px;
    width: 30%;
    height: 30%;
  }
`;
