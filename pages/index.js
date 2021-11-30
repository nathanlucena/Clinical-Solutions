import React, { useState, useEffect, useContext } from 'react';
import Head from 'next/head';
import ReactLoading from 'react-loading';
import { Header } from '../src/components/header/';
import { Menu } from '../src/components/menu/';
import userContext from '../src/contexts/userContext';
import patientContext from '../src/contexts/patientContext';
import useSWR from 'swr';
import AxiosLogged from '../utils/api';
import { useSession } from 'next-auth/client';
import { NotLogged } from '../src/components/NotLogged';
import { NotRegistered } from '../src/components/NotRegistered';
import { LoggedRegistered } from '../src/components/LoggedRegistered';

export default function Component({ type, color }) {

  const [loggedAccount, setLoggedAccount] = useState(false);

  const [session, loading] = useSession();

  const { data, error } = useSWR(
    !loggedAccount && !loading ? `/api/doctor/${session?.user.email}` : null,
    AxiosLogged
  );

  const { setUserInfo } = useContext(userContext);
  
  useEffect(() => {
    if (session?.user.email !== data?.data.email) setLoggedAccount(true);
  }, [data]);

  const user = data?.data;

  useEffect(() => {
    if (user !== undefined) {
      function setContext() {
        setUserInfo(user);
      }
      setContext();
    }
  }, [user]);

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
          {(!session && !loading) ? <NotLogged /> :
            (session && data) ? <LoggedRegistered /> :
              (loggedAccount) ? 
                <NotRegistered
                  emailGoogle={`${session?.user.email}`}
                  avatarGoogle={`${session?.user.image}`}
                /> :
                (loading) ?
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
                  </div> : null}
        </div>
      </div>
    </>
  );
}
