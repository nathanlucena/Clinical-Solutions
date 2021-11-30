import { useState, useEffect } from "react";

// O SWR que vai salvar os dados do nosso usario
import useSWR from 'swr';

// Importando a função do axios que vai ver se existe um dado igual ao email logado pelo google
import AxiosLogged from '../../utils/api'

// O next-auth é a lib responsavel pelo login do google 
// Botao pra singOut   <button onClick={() => signOut()}>singOut</button>
// Botao pra singIn  <button onClick={() => signIn('auth0')}>Sign in</button>
import { useSession, signIn, signOut } from "next-auth/client";

const useDataAccount = () => {
  // State criado pra ser o "LOGADO COM O GOOGLE, MAS SEM CONTA NO NOSSO SITE" 
  const [loggedAccount, setLoggedAccount] = useState(false);

  // O useSession é que pega os dados do nosso usuario google como "session.user.name/email/avatar"
  const [session, loading] = useSession();

  async function aa() {
    const { data, error } = await useSWR(!loggedAccount && !loading ? `/api/patient/${session?.user.email}` : null, AxiosLogged);

    useEffect(() => {
      if (session?.user.email !== data?.data[0]?.email) setLoggedAccount(true);
    }, [data]);

  }

  aa();

  // Aqui o SWR faz uma busca se o email do google existe no nosso banco

  return loggedAccount;
};

export default useDataAccount;