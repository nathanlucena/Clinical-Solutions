import axios from 'axios';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import userContext from '../../contexts/userContext';
import listContext from '../../contexts/listContext';
import Image from 'next/image';
import maleImg from '../../assets/images/homem.png';
import femaleImg from '../../assets/images/mulher.png';

import { Wrapper, Card } from './styles';

export const ListPatients = ({ active }) => {
  const { userInfo } = useContext(userContext);
  //const { setAtualPatient } = useContext(patientContext);
  const { listPatients } = useContext(listContext);

  const [email, setEmail] = useState(userInfo.email);

  function ageFunc(age) {
    return 2021 - parseInt(age.substr(6));
  }

  return (
    <Wrapper>
      <div className="search-bar">
        <input type="text" />
      </div>
      <div className="patient-list-grid">
        {listPatients !== [] &&
        listPatients !== undefined &&
        listPatients !== null
          ? listPatients.map((item) => {
              return (
                <div key={item.rg} className="block-cards">
                  <Card /* onClick={() => setAtualPatient(item)} */>
                    <div className="container-profile">
                      {item.sexo === 'M' ? (
                        <div className="profile-pic">
                          <Image
                            src={maleImg}
                            alt="male"
                            layout="intrinsic"
                          />
                        </div>
                      ) : (
                        <div className="profile-pic">
                          <Image
                            src={femaleImg}
                            alt="female"
                            layout="intrinsic"
                          />
                        </div>
                      )}
                      <div className="profile-text">
                        <span className="name-text">{item.name}</span>
                        <span>{ageFunc(item.birthDate)} Anos</span>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })
          : null}
      </div>
      <span style={{fontSize: '20px'}}>* Escolha o cadastro do paciente desejado</span>
    </Wrapper>
  );
};
