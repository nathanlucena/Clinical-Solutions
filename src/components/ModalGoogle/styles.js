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

