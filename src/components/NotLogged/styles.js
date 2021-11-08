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
  padding: 80px;
  background: #ffffff;
  height: 450px;
  min-width: 350px;
  max-width: 600px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1D6631;
  text-align: center;
  p{
    font-size: 20px;
    margin: 0;
  }
`;

export const GoogleButton = styled.div`
   background-color: #C8FBD6;
   max-width: 45%;
   border-radius: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 10%;
   transition: 0.3s;
   cursor: pointer;
  img{
    padding: 30px 0 30px;
    width: 70%;
  }

  &:hover{
    background-color: #48F077;
  }
`;

export const LinkConta = styled.p`
   text-decoration: underline;
   transition: 0.3s;
   cursor: pointer;
  &:hover{
   color: #48F077;
  }
`;

