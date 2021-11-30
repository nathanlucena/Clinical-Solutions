import React, { useContext, useState } from 'react';
import menuContext from '../../contexts/menuContext';
import userContext from '../../contexts/userContext';
import listContext from '../../contexts/listContext';
import patientContext from '../../contexts/patientContext';
import Link from 'next/link';
import { Wrapper, Option, Line } from './styles';
import axios from 'axios';

export const Menu = (options) => {
  const { setMenuOption } = useContext(menuContext);
  const { userInfo } = useContext(userContext);
  const { setListPatients } = useContext(listContext);
  const { actualPatient, setActualPatient } = useContext(patientContext);

  const [clicked, setClicked] = useState('');

  const optionsArray = options.options;

  function handleClick(i) {
    if (i !== clicked) {
      setClicked(i);
    }
  }

  const getBanco = async (email) => {
    const response = await axios
      .get('http://localhost:3000/api/doctor/' + email)
      .then((response) => {
        let resp = response;
        setListPatients(resp.data?.patients);
      });
  };

  const handleList = (option) => {
    if (clicked !== option) {
      if (option === 'Lista de Pacientes') {
        getBanco(userInfo?.email);
      }
    }
  };

  return (
    <Wrapper>
      {optionsArray.map((i) => (
        <div key={i}>
          <Link href="/">
            <Option
              style={
                i === clicked
                  ? { backgroundColor: '#48F077' }
                  : { backgroundColor: '' }
              }
              onClick={() => {
                handleClick(i);
                setMenuOption(i);
                handleList(i);
                setActualPatient('');
              }}
            >
              {i}
            </Option>
          </Link>
          <Line />
        </div>
      ))}
      {actualPatient ? (
        <>
          <p>{actualPatient.name}</p>
          <Line />
        </>
      ) : null}
    </Wrapper>
  );
};
