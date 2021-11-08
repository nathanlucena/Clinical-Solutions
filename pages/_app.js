import '../styles/globals.css'
import { Provider } from "next-auth/client"
import { useState } from 'react'
import userContext from '../src/contexts/userContext'

export default function App({ Component, pageProps }) {
  const [userInfo, setUserInfo] = useState();

  return (
    <Provider session={pageProps.session}>
      <userContext.Provider value={{ userInfo, setUserInfo }}>
        <Component {...pageProps} />
      </userContext.Provider>
    </Provider>
  )
}