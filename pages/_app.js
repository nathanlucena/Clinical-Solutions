import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import { useState } from 'react';
import userContext from '../src/contexts/userContext';
import menuContext from '../src/contexts/menuContext';
import listContext from '../src/contexts/listContext';
import patientContext from '../src/contexts/patientContext';

export default function App({ Component, pageProps }) {
  const [userInfo, setUserInfo] = useState();
  const [menuOption, setMenuOption] = useState();
  const [listPatients, setListPatients] = useState();
  const [actualPatient, setActualPatient] = useState();

  return (
    <Provider session={pageProps.session}>
      <menuContext.Provider value={{ menuOption, setMenuOption }}>
        <patientContext.Provider value={{ actualPatient, setActualPatient }}>
          <userContext.Provider value={{ userInfo, setUserInfo }}>
            <listContext.Provider value={{ listPatients, setListPatients }}>
              <Component {...pageProps} />
            </listContext.Provider>
          </userContext.Provider>
        </patientContext.Provider>
      </menuContext.Provider>
    </Provider>
  );
}
