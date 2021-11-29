import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import ReactLoading from 'react-loading';
import { Header } from '../src/components/header/';
import { Menu } from '../src/components/menu/';
import userContext from '../src/contexts/userContext';
import patientContext from '../src/contexts/patientContext';

// O SWR que vai salvar os dados do nosso usario
import useSWR from 'swr';

// Importando a função do axios que vai ver se existe um dado igual ao email logado pelo google
import AxiosLogged from '../utils/api';

// O next-auth é a lib responsavel pelo login do google
// Botao pra singOut   <button onClick={() => signOut()}>singOut</button>
// Botao pra singIn  <button onClick={() => signIn('auth0')}>Sign in</button>
import { useSession } from 'next-auth/client';
import { NotLogged } from '../src/components/NotLogged';
import { NotRegistered } from '../src/components/NotRegistered';
import { LoggedRegistered } from '../src/components/LoggedRegistered';

//import { Loader } from '../src/components/Loader/';

export default function Component({ type, color }) {
  // State criado pra ser o "LOGADO COM O GOOGLE, MAS SEM CONTA NO NOSSO SITE"
  const [loggedAccount, setLoggedAccount] = useState(false);

  // O useSession é que pega os dados do nosso usuario google como "session.user.name/email/avatar"
  const [session, loading] = useSession();

  // Aqui o SWR faz uma busca se o email do google existe no nosso banco
  const { data, error } = useSWR(
    !loggedAccount && !loading ? `/api/doctor/${session?.user.email}` : null,
    AxiosLogged
  );

  const { setUserInfo } = useContext(userContext);

  const { actualPatient } = useContext(patientContext);
  // Esse useEfect tá sendo o problema porque ele que diz se o usuario tá "loggedAccont", mas o if acaba não sendo tão rapido então se ele não tiver conta no nosso banco ele da um erro
  // Então da pra testar emails que ja estão no nosso banco de boa, já que a ideia do site não deixa ninguém logado
  // Resumidamente por enquanto se tu quiser testar o "loggedAccount" tu tem que comentar todo o conteúdo que envolve o "data"
  useEffect(() => {
    console.log('teste 4');
    if (session?.user.email !== data?.data.email) setLoggedAccount(true);
  }, [data]);

  // criei essa const só pra facilitar a forma da gente usar os dados do usario
  const user = data?.data;
  // name,
  // sexo,
  // email,
  // birthDate,
  // cpf,
  // rg,
  // status,
  // profession,
  // phone,
  // convenio,
  // adress,
  // anamnese,

  useEffect(() => {
    function setContext() {
      if (user === undefined) {
        console.log('User not set');
      } else {
        setUserInfo(user);
      }
    }
    setContext();
  }, [user]);

  function Naologado() {
    return (
      <div>
        <NotLogged />
      </div>
    );
  }

  function LogadoComConta() {
    return (
      <>
        <LoggedRegistered />
      </>
    );
  }

  function LogadoSemConta() {
    return (
      <div>
        <NotRegistered
          emailGoogle={`${session?.user.email}`}
          avatarGoogle={`${session?.user.image}`}
        />
      </div>
    );
  }

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
        <div className="mainArea">
          {/* CASO USUARIO NÃO ESTEJA LOGADO */}
          {!session && !loading && <Naologado />}

          {/* CASO O USUARIO ESTEJA LOGADO E COM EMAIL NO NOSSO BANCO */}
          {session && data && (
            <>
              <LogadoComConta />
            </>
          )}

          {/* CASO O USUARIO ESTEJA LOGADO E NÃO TEM EMAIL NO NOSSO BANCO */}
          {loggedAccount && <LogadoSemConta />}

          {/* ENQUANTO ELE PROCESSA O USUARIO */}
          {loading && (
            <div
              style={{
                display: 'flex',
                position: 'absolute',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                top: 0,
                left: 0,
                zIndex: 5000,
                height: '100%',
                width: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.22)',
              }}
            >
              <ReactLoading
                type="spin"
                color="#ffffff"
                height={'20%'}
                width={'20%'}
              />
              <span
                style={{
                  display: 'flex',
                  position: 'relative',
                  color: '#ffffff',
                  fontSize: 30,
                  top: '20%',
                }}
              >
                Carregando...
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// export default function Home() {
//   const [showModal, setShowModal] = useState(true)

//   return (
<div>
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

  {/* {showModal &&
        <Modal onClose={() => setShowModal(false)} title="Registro do Produto">
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
                <p>E-mail</p>
                <input type="text" id="InputEmail" placeholder="E-mail" />
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
        </Modal>
      } */}
</div>;
//   )
// }
