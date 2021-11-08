import {React} from 'react'
import { ModalBackground, Container, Content, Title, Email, Avatar, DivEmail, ButtonEmail } from './styles.js';

export const ModalRegister = ({ children, title, email, avatar, funcEmail, textEmail}) => {

  return (
    <ModalBackground>
      <Container>
        <Title>{title}</Title>
        <DivEmail >
          <Avatar src={avatar} />
          <Email>{email}</Email>
        </DivEmail>
        <Content>
          {children}
        </Content>
        <ButtonEmail onClick={funcEmail}> {textEmail} </ButtonEmail>
      </Container>
    </ModalBackground>
  );
};
