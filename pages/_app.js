import '../styles/globals.css';
import { Provider } from 'next-auth/client';
import { useState } from 'react';
import userContext from '../src/contexts/userContext';
import menuContext from '../src/contexts/menuContext';

export default function App({ Component, pageProps }) {
  const [userInfo, setUserInfo] = useState();
  const [menuOption, setMenuOption] = useState();

  return (
    <Provider session={pageProps.session}>
      <menuContext.Provider value={{ menuOption, setMenuOption }}>
        <userContext.Provider value={{ userInfo, setUserInfo }}>
          <Component {...pageProps} />
        </userContext.Provider>
      </menuContext.Provider>
    </Provider>
  );
}
