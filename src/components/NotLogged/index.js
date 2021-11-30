import { React } from 'react';
import {
  ModalBackground,
  Container,
  GoogleButton,
  LinkConta,
} from './styles.js';
import { useSession, signIn, signOut } from 'next-auth/client';

export const NotLogged = () => {
  return (
    <ModalBackground>
      <Container>
        <h2>Entre com o Google</h2>
        <p>Clique no botão abaixo e entre em sua conta:</p>
        <GoogleButton onClick={() => signIn('auth0')}>
          <img src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/04/imagem-google-logo-com-fundo-transparente-1.png" />
        </GoogleButton>
      </Container>
    </ModalBackground>
  );
};
