import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useSession } from 'next-auth/client';
import { Header } from '../../src/components/header';
import { Menu } from '../../src/components/Menu';
import userContext from '../../src/contexts/userContext';
import AxiosLogged from '../../utils/api';
import { PatientActual } from '../../src/components/PatientActual';

export default function Component() {
  const [loggedAccount, setLoggedAccount] = useState(false);

  const router = useRouter();
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
    function setContext() {
      if (user === undefined) {
        console.log('oi');
      } else {
        setUserInfo(user);
      }
    }
    setContext();
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
        <div>
          <PatientActual />
        </div>
      </div>
    </>
  );
}
