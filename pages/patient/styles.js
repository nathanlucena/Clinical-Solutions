import styled from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  font-size: 20px;
  color: #1d6631;
  overflow: auto;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4%;
  margin-top: 5rem;
  font-size: 100%;

  .image {
    height: 100px;
    border: 2px solid;
    border-radius: 10%;
    margin-right: 4%;
    img {
      height: 100px;
    }
  }
  .flexDiv {
    display: flex;
    margin-top: 5px;
    span {
      margin-left: 10px;
    }
  }
`;

export const Anamnese = styled.div`
  margin: 4%;
  padding: 1%;
  border-top: 3px solid;
  border-bottom: 3px solid;

  .divMap {
    display: flex;
    flex-direction: column;
    span {
      padding: 2%;
    }
  }

  p {
    font-size: 25px;
  }
`;
