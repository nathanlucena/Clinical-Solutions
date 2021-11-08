import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background: rgba(0,0,0,0.6);
  cursor: default;
`;

export const Container = styled.div`
  padding: 40px;
  background: #ffffff;
  height: 550px;
  min-width: 350px;
  max-width: 350px;
  border-radius: 20px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1px;
  bottom: 0;
  p{
    margin: 0;
    margin-bottom: 5px;
    color: #169439;
  }
  input{
    border: 1px solid black;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    padding: 0 10px;
    &:focus{
      outline: none;
      border-color: #48f077;
      box-shadow: #48f077;
    }
  }
  #InputActivationKey{
    margin-bottom: 15px;
  }
  button{
    border: 0;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    padding: 0 10px;
    background-color: #48f077;
    font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 600;

    &:hover {
      background-color: #40de6c;
    }
  }
`;

export const ButtonEmail = styled.button`
  border: 0;
  border-radius: 5px;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height: 40px;
  padding: 10px;
  margin: 10px 0;
  background-color: #d4d4d4;
  font-family: Inter,-apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color:#b3b3b3;
  }
`;


export const Title = styled.span`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #169439;
  margin-bottom: 10px;
`;

export const Email = styled.span`
  display: flex;
  justify-content: center;
  font-size: min(18px, 18px);
  font-weight: bold;
  color: #169439;
`;

export const DivEmail = styled.div`
 width: 100%;
 display:flex;
 justify-content: space-around;
 align-items: center;
 padding:20px 0 20px 0;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 35px;
  border: 1px solid #ccc;
  padding: 1px;
  margin-right: 5px ;
`;

