import axios from 'axios';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import userContext from '../../contexts/userContext';
import patientContext from '../../contexts/patientContext';
import listContext from '../../contexts/listContext';
import Image from 'next/image';
import maleImg from '../../assets/images/homem.png';
import femaleImg from '../../assets/images/mulher.png';
import Link from 'next/link';
import lupa from '../../assets/images/Lupa.svg';
import { alpha, styled } from '@material-ui/styles';
import { InputBase, FormControl, InputAdornment } from '@material-ui/core';

import { Wrapper, Card, InputDiv } from './styles';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    position: 'relative',
    background: 'transparent',
    borderBottom: '1px solid #48f077',
    fontSize: 16,
    width: 'auto',
    padding: '20px',
    paddingLeft: '35px',
  },
}));

export const ListPatients = ({ active }) => {
  const { userInfo } = useContext(userContext);
  const { setActualPatient } = useContext(patientContext);
  const { listPatients } = useContext(listContext);
  const [search, setSearch] = useState('');
  const [list, setList] = useState(listPatients);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    let find = e.target.value;
    if (find === '') {
      setList(listPatients);
    }
  };

  const handleSubmitSearch = (e, item) => {
    let value = item.toLowerCase();
    if (e.key === 'Enter') {
      let result = listPatients.filter((patient) =>
        patient.name.toLowerCase().includes(value)
      );
      setList(result);
    }
  };

  function ageFunc(age) {
    return 2021 - parseInt(age.substr(6));
  }

  return (
    <Wrapper>
      <div className="search-bar">
        <FormControl variant="standard">
          <BootstrapInput
            placeholder="Digite aqui..."
            id="bootstrap-input"
            variant="standard"
            value={search}
            onChange={handleSearch}
            onKeyDown={(e) => {
              handleSubmitSearch(e, search);
            }}
            startAdornment={
              <InputAdornment position="start">
                <Image
                  src={lupa}
                  alt="Lupa"
                  className="looking-glass"
                  width="20px"
                />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div className="patient-list-grid">
        {list !== [] && list !== undefined && list !== null
          ? list.map((item) => {
              return (
                <div key={item.rg} className="block-cards">
                  <Card>
                    <Link href={'Patient/' + item.rg}>
                      <div
                        className="container-profile"
                        onClick={(e) => {
                          e.stopPropagation;
                          setActualPatient(item);
                        }}
                      >
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
                    </Link>
                  </Card>
                </div>
              );
            })
          : null}
      </div>
      <span style={{ fontSize: '20px' }}>
        * Escolha o cadastro do paciente desejado
      </span>
    </Wrapper>
  );
};
