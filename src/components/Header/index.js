import React, { useContext } from 'react';
import logo from './logo.png';
import { DivTitle, Title, Wrapper } from './styles';
import { useSession, signIn, signOut } from 'next-auth/client';
import userContext from '../../contexts/userContext';
import Image from 'next/image';

export const Header = ({ nameClinic, nameMedico }) => {
  const { userInfo } = useContext(userContext);
  return (
    <Wrapper>
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
            <img onClick={() => signOut()} src={userInfo.image} />
          ) : (
            ''
          )}
        </div>
      </div>
    </Wrapper>
  );
};
