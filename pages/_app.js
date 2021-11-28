import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import { useState } from 'react';
import userContext from '../src/contexts/userContext';
import menuContext from '../src/contexts/menuContext';
import patientContext from '../src/contexts/patientContext';

export default function App({ Component, pageProps }) {
  const [userInfo, setUserInfo] = useState();
  const [menuOption, setMenuOption] = useState();
  const [actualPatient, setAtualPatient] = useState({
    email: 'juliaodacunha@gmail.com',
    patients: [
      {
        name: 'Fernana rodrigues',
        sexo: 'M',
        email: 'fernandaaa@.com',
        birthDate: '12/05/2000',
        cpf: '12332132145',
        rg: '14',
        status: 'solteiro',
        profession: 'Desenvolvedor',
        phone: '81912344321',
        convenio: 'UNIFG',
        anamnese: 'a',
        adress: {
          cep: '55760000',
          street: 'Rua da manguerinha',
          number: '69',
          state: 'PE',
          district: 'Gaibu',
        },
      },
    ],
  });

  return (
    <Provider session={pageProps.session}>
      <menuContext.Provider value={{ menuOption, setMenuOption }}>
        <patientContext.Provider value={{ actualPatient, setAtualPatient }}>
          <userContext.Provider value={{ userInfo, setUserInfo }}>
            <Component {...pageProps} />
          </userContext.Provider>
        </patientContext.Provider>
      </menuContext.Provider>
    </Provider>
  );
}
