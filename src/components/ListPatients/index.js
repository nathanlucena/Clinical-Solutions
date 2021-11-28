import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import userContext from '../../contexts/userContext';
import Image from 'next/image';
import maleImg from '../../assets/images/homem.png';
import femaleImg from '../../assets/images/mulher.png';

import { Wrapper, Card } from './styles';

export const ListPatients = ({ active }) => {
  const { userInfo } = useContext(userContext);
  const [listP, setListP] = useState([]);

  async function getBanco(email) {
    const response = await axios.get(
      'http://localhost:3000/api/doctor/' + email
    );
    let resp = response;
    console.log(resp.data?.patients);
    if (listP !== resp.data?.patients) {
      setListP(resp.data?.patients);
    }
  }

  useEffect(() => {
    getBanco(userInfo?.email);
  }, []);

  function ageFunc(age) {
    return 2021 - parseInt(age.substr(6));
  }

  return (
    <Wrapper>
      <div className="aa">
        <h1>Buscar pacientes</h1>
        <input type="text" />
      </div>
      {listP !== [] && listP !== undefined && listP !== null
        ? listP.map((item) => {
            return (
              <div key={item.rg} className="block-cards">
                <Card>
                  {item.sexo === 'F' ? (
                    <Image src={maleImg} alt="female" />
                  ) : (
                    <Image src={femaleImg} alt="male" />
                  )}
                  <div>
                    <h1>{item.name}</h1>
                    <h3>{ageFunc(item.birthDate)} Anos</h3>
                  </div>
                </Card>
              </div>
            );
          })
        : null}
    </Wrapper>
  );
};
