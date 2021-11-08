import React, { useContext } from 'react';
import logo from './logo.png'
import { DivTitle, Title, Wrapper } from './styles';
import { useSession, signIn, signOut } from "next-auth/client";
import userContext from '../../contexts/userContext';


export const Header = ({nameClinic, nameMedico}) => {
  const { userInfo } = useContext(userContext);
  return (
    <Wrapper>
        <div className="parent">
            <div className="div1"> 
              <DivTitle>
                  <img src="https://cdn11.bigcommerce.com/s-7va6f0fjxr/images/stencil/1280x1280/products/45973/62212/Caduceus-Medical-Symbol-Vinyl-Decal-Sticker__77081.1506200178.jpg?c=2"/>
                  <Title> Clinical Solutions</Title>
              </DivTitle>
            </div>
            <div className="div2">
                {nameClinic}  {nameMedico} 
                {userInfo? <img onClick={() => signOut()} src={userInfo.image}/>: ""}
             </div>
        </div>
    </Wrapper>
  );
}
