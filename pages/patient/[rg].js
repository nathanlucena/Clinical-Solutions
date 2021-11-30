import React, { useState, useEffect, useContext } from 'react';
import useSWR from 'swr';
import { useSession } from 'next-auth/client';
import { Header } from '../../src/components/header';
import { Menu } from '../../src/components/Menu';
import userContext from '../../src/contexts/userContext';
import AxiosLogged from '../../utils/api';
import patientContext from '../../src/contexts/patientContext';
import Image from 'next/image';
import maleImg from '../../src/assets/images/homem.png';
import femaleImg from '../../src/assets/images/mulher.png';
import trash from '../../src/assets/images/lixo.svg';
import Link from 'next/link';

import { Wrapper, Infos, Anamnese, BtnDell } from './styles';
import axios from 'axios';
import { IoMdTrash } from 'react-icons/io';

export default function Component() {
  const { setUserInfo, userInfo } = useContext(userContext);
  const { actualPatient } = useContext(patientContext);

  const [loggedAccount, setLoggedAccount] = useState(false);

  const [session, loading] = useSession();

  const { data, error } = useSWR(
    !loggedAccount && !loading ? `/api/doctor/${session?.user.email}` : null,
    AxiosLogged
  );

  useEffect(() => {
    if (session?.user.email !== data?.data.email) setLoggedAccount(true);
  }, [data]);

  const user = data?.data;

  useEffect(() => {
    if (user !== undefined) {
      setUserInfo(user);
    }
  }, [user]);

  function ageFunc(age) {
    return 2021 - parseInt(age?.substr(6));
  }

  const handleDelete = async () => {
    await axios.put('http://localhost:3000/api/doctor/' + userInfo?.email, {
      patients: {
        rg: actualPatient?.rg,
      },
    });
  };

  return (
    <>
      {user ? (
        <Header
          nameMedico={`${user?.name}`}
          nameClinic={`${user?.clinicName} -`}
        />
      ) : (
        <Header nameMedico="" nameClinic="" />
      )}
      <div className="main">
        <Menu options={['Cadastro', 'Lista de Pacientes']} />
        {actualPatient ? (
          <Wrapper>
            <Infos>
              <div className="image">
                {actualPatient?.sexo === 'M' ? (
                  <div className="profile-pic">
                    <Image src={maleImg} alt="male" layout="intrinsic" />
                  </div>
                ) : (
                  <div className="profile-pic">
                    <Image src={femaleImg} alt="female" layout="intrinsic" />
                  </div>
                )}
              </div>
              <div className="data">
                <div className="flexDiv">
                  <span>Nome: </span>
                  <span>{actualPatient?.name}</span>
                </div>
                <div className="flexDiv">
                  <span>Idade: </span>
                  <span>{ageFunc(actualPatient?.birthDate)} Anos</span>
                </div>
                <div className="flexDiv">
                  <span>Data de nascimento:</span>
                  <span>{actualPatient?.birthDate}</span>
                </div>
                <div className="flexDiv">
                  <span>Email: </span>
                  <span>{actualPatient?.email}</span>
                </div>
                <div className="flexDiv">
                  <span>CPF: </span>
                  <span>{actualPatient?.cpf}</span>
                </div>
                <div className="flexDiv">
                  <span>RG: </span>
                  <span>{actualPatient?.rg}</span>
                </div>
                <div className="flexDiv">
                  <span>Estado civil: </span>
                  <span>{actualPatient?.status}</span>
                </div>
                <div className="flexDiv">
                  <span>Profissão: </span>
                  <span>{actualPatient?.profession}</span>
                </div>
                <div className="flexDiv">
                  <span>Celular: </span>
                  <span>{actualPatient?.phone}</span>
                </div>
                <div className="flexDiv">
                  <span>Convênio: </span>
                  <span>{actualPatient?.convenio}</span>
                </div>
                <div className="flexDiv">
                  <span>Endereço: </span>
                  <span>
                    {` ${actualPatient?.address?.street} ${actualPatient?.address?.number}, ${actualPatient?.address?.district} - ${actualPatient?.address?.state} - ${actualPatient?.address?.cep} `}
                  </span>
                </div>
              </div>
              <Link href="/">
                <BtnDell>
                  <span
                    onClick={() => {
                      // handleDelete();
                      // setMenuOption(' ');
                      // setActualPatient();
                    }}
                  >
                    Deletar
                  </span>
                  <IoMdTrash className="icon" />
                </BtnDell>
              </Link>
            </Infos>

            {actualPatient?.anamnese !== undefined ? (
              <Anamnese>
                <p>Avaliações Previas: </p>
                <div className="divMap">
                  {actualPatient?.anamnese.map((i) => {
                    return <span>{i}</span>;
                  })}
                </div>
              </Anamnese>
            ) : null}
          </Wrapper>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
