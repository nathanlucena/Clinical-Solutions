import React, { useContext, useState } from 'react';
import logo from './logo.png';
import {
  DivTitle,
  Title,
  Wrapper,
  Modal,
  ModalContainer,
  ModalTitle,
  Button,
  ButtonText,
  ButtonContainer
} from './styles';
import { useSession, signIn, signOut } from 'next-auth/client';
import userContext from '../../contexts/userContext';
import Image from 'next/image';

export const Header = ({ nameClinic, nameMedico }) => {
  const { userInfo } = useContext(userContext);
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleSignOut = () => {
    signOut()
    handleCloseModal()
  }

  return (
    <Wrapper>
      {openModal ? (
        <ModalContainer>
          <Modal>
            <ModalTitle>
              Gostaria de sair da sua conta?
            </ModalTitle>
            <ButtonContainer>
              <Button  onClick={handleCloseModal}>
                <ButtonText>
                  Não
                </ButtonText>
              </Button>
              <Button onClick={handleSignOut}>
                <ButtonText >
                  Sair
                </ButtonText>
              </Button>
            </ButtonContainer>
          </Modal>
        </ModalContainer>
      ) : null}
      <div className="parent">
        <div className="div1">
          <DivTitle>
            <Image src={logo} alt="aa" />
            <Title> Clinical Solutions</Title>
          </DivTitle>
        </div>
        <div className="div2">
          {nameClinic} {nameMedico}
          {userInfo ? (
            <img onClick={() => handleOpenModal()} src={userInfo.image} />
          ) : (
            ''
          )}
        </div>
      </div>
    </Wrapper>
  );
};
