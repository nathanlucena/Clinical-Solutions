import axios from 'axios';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import userContext from '../../contexts/userContext';
import Image from 'next/image';
import maleImg from '../../assets/images/homem.png';
import femaleImg from '../../assets/images/mulher.png';

import { Wrapper, Card } from './styles';

export const ListPatients = ({ active }) => {
  const { userInfo } = useContext(userContext);
  const { setAtualPatient } = useContext(patientContext);
  const [listP, setListP] = useState([]);
  const [email, setEmail] = useState(userInfo.email);

  // async function getBanco(email) {
  //   const response = await axios.get(
  //     'http://localhost:3000/api/doctor/' + email
  //   );
  //   let resp = response;
  //   console.log(resp.data?.patients);
  //   if (listP !== resp.data?.patients) {
  //     setListP(resp.data?.patients);
  //   }
  // }
  const getBanco = async (email) => {
    const response = await axios.get(
      'http://localhost:3000/api/doctor/' + email
    );
    let resp = response;
    console.log(resp.data?.patients);
    if (listP !== resp.data?.patients) {
      setListP(resp.data?.patients);
    }
  },[])
  };

  useEffect(() => {
    getBanco(email);
  }, []);

  function ageFunc(age) {
    return 2021 - parseInt(age.substr(6));
  }

  return (
    <Wrapper>
      <div className="search-bar">
        <h1>Buscar pacientes</h1>
        <input type="text" />
      </div>
      <div className="patient-list-grid">
        {listP !== [] && listP !== undefined && listP !== null
          ? listP.map((item) => {
              return (
                <div key={item.rg} className="block-cards">
                  <Card onClick={() => setAtualPatient(item)}>
                    <div className="container-profile">
                      {item.sexo === 'M' ? (
                        <Image
                          className="profile-pic"
                          src={maleImg}
                          alt="female"
                        />
                      ) : (
                        <Image
                          className="profile-pic"
                          src={femaleImg}
                          alt="male"
                        />
                      )}
                      <div>
                        <h1>{item.name}</h1>
                        <h3>{ageFunc(item.birthDate)} Anos</h3>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })
          : null}
      </div>
    </Wrapper>
  );
};
