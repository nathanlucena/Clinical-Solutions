import styled from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  font-size: 20px;
  font-weight: 600;
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

export const BtnDell = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #48f077;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  fill: #fff;
  position: absolute;
  right: 50px;
  top: 130px;
  .icon {
    font-size: 35px;
  }

  &:hover {
    background-color: #1d6631;
    color: #48f077;
    cursor: pointer;
  }
`;
