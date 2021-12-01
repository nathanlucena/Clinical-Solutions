import React, { useState } from 'react';
import { signOut } from "next-auth/client";
import Head from "next/head";
import { ModalRegister } from '../ModalRegister';
import axios from 'axios';

import { Wrapper } from './styles';

export const NotRegistered = ({ emailGoogle, avatarGoogle }) => {
  const [showModal, setShowModal] = useState(true);
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [clinicName, setClinicName] = useState(true);
  const [activationKey, setActivationKey] = useState(true);

  const handleChangeName = (e) => {
    setName(e.target.value);
  }
  const handleChangeSpecialty = (e) => {
    setSpecialty(e.target.value);
  }
  const handleChangeClinicName = (e) => {
    setClinicName(e.target.value);
  }
  const handleChangeActivationKey = (e) => {
    setActivationKey(e.target.value);
  }
  const handleSubmit = async (name, specialty, clinicName, activationKey, email, picture) => {
    await axios.post("http://localhost:3000/api/doctor", {
      "name": name,
      "email": email,
      "clinicName": clinicName,
      "specialty": specialty,
      "keyAct": activationKey,
      "image": picture,
      "patients": []
    }).catch((error) => {
      return error;
    })
  }

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
              <form>
                <p>Nome</p>
                <input type="text" id="InputName" placeholder="Insira o seu nome" onChange={handleChangeName} />
                <p>Especialidade</p>
                <input type="text" id="InputSpecialty" placeholder="Insira sua especialidade" onChange={handleChangeSpecialty} />
                <p>Nome da Clinica</p>
                <input type="text" id="InputClinicName" placeholder="Insira o nome da Clinica" onChange={handleChangeClinicName} />
                <p>Chave de Ativação</p>
                <input type="text" id="InputActivationKey" placeholder="XXXX-XXXX-XXXX-XXXXX" onChange={handleChangeActivationKey} />
                <button
                  type="submit"
                  id="ButtonSubmitActivation"
                  onClick={() => { handleSubmit(name, specialty, clinicName, activationKey, emailGoogle, avatarGoogle) }}
                >
                  Ativar Clinical Solution
                </button>
              </form>
            </ModalRegister>
          }
        </div >
      </>
    </Wrapper>
  );
}
