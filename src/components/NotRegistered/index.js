import React, {useState} from 'react';
import { signOut } from "next-auth/client";
import Head from "next/head";
import { ModalRegister } from '../ModalRegister';
import { Formik } from 'formik';

import { Wrapper } from './styles';

export const NotRegistered = ({emailGoogle, avatarGoogle}) => {
    const [showModal, setShowModal] = useState(true);
  return (
    <Wrapper>
      <>
        <div >
          <Head>
            <link
              rel="preload"
              href="/fonts/Poppins/Poppins-Regular.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/fonts/Poppins/Poppins-Light.ttf"
              as="font"
              crossOrigin=""
            />
            <link 
              rel="preload"
              href="/fonts/Poppins/Poppins-Bold.ttf"
              as="font"
              crossOrigin=""
            />
            <link
              rel="preload"
              href="/fonts/Poppins/Poppins-SemiBold.ttf"
              as="font"
              crossOrigin=""
            />
          </Head>

          {showModal &&
            <ModalRegister onClose={() => setShowModal(false)} 
            title="Registrar o Produto como:" 
            email={emailGoogle} 
            avatar={avatarGoogle} 
            textEmail="Desejo usar outro email"
            funcEmail={() => signOut()}
            >
              <Formik
                initialValues={{
                  name: "",
                  specialty: "",
                  email: "",
                  clinicalName: "",
                  activationKey: "",
                }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }
                    , 1000);
                }}
              >
                {props => (
                  <form onSubmit={props.handleSubmit}>
                    <p>Nome</p>
                    <input type="text" id="InputName" placeholder="Nome" />
                    <p>Especialidade</p>
                    <input type="text" id="InputSpecialty" placeholder="Especialidade" />
                    {/* <p>E-mail</p>
                    <input type="text" id="InputEmail" placeholder={session?.user.email} /> */}
                    <p>Nome da Clinica</p>
                    <input type="text" id="InputClinicName" placeholder="Nome da Clinica" />
                    <p>Chave de Ativação</p>
                    <input type="text" id="InputActivationKey" placeholder="XXXX-XXXX-XXXX-XXXXX" />
                    <button
                      type="submit"
                      id="ButtonSubmitActivation"
                      onClick={() => setShowModal(false)}
                    >
                      Ativar Clinical Solution
                    </button>
                  </form>
                )}
              </Formik>
              {/* <button onClick={() => signOut()}>Try another email</button> */}
            </ModalRegister>
          }
        </div >
      </>
    </Wrapper>
  );
}
