import styled from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  z-index: 1;
  display: block;
  position: fixed;
  width: 100%;
  max-height: 4rem;
  background: linear-gradient(
    180deg,
    #95fab1 0%,
    #6df593 30.52%,
    #46ef75 57.03%,
    #6ff594 77.92%,
    #95fab1 100%
  );
  padding: 0.5em 0 0.5em;
  color: #000;
  font-size: 20px;
  font-weight: 600;

  .parent {
    display: grid;
    grid-template-columns: 1fr 5fr repeat(3, 0fr);
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 6;
  }

  .div2 {
    color: #1d6631;
    grid-area: 1 / 2 / 2 / 6;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 30%;
    display: flex;

    img {
      border-radius: 50%;
      width: 50px;
      border: 2px solid #ccc;
      margin: 0 20px;
      margin-left: auto;
      cursor: pointer;
    }
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95FAB1;
  padding: 30px;
  border-radius: 10px;
  height: 200px;
  width: 400px;
  z-index: 1001;
`;

export const ModalContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content:center;
  align-items: center;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
`;


export const ModalTitle = styled.span``;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #48F077;
  color: #1d6631;
  border: 1px solid #1d6631;
  border-radius: 10px;
  height: 50px;
  width: 100px;
  &:hover {
    background-color: #1d6631;
    color: #48F077; 
    border: 1px solid #48F077;
  }
`;
export const ButtonText = styled.div`
`;
export const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 2%;
  img {
    border-radius: 50%;
    width: 50px;
    border: 2px solid #ccc;
    margin: 0 20px;
  }

  @media (max-width: 800px) {
    width: 10%;
  }
`;

export const Title = styled.text`
  font-family: Poppins, -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
    sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #1d6631;
  margin-left: 2%;
`;

//https://upload.wikimedia.org/wikipedia/commons/5/57/Caduceus.svg
