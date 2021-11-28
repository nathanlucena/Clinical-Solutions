import React, { useContext, useEffect } from 'react';
import patientContext from '../../contexts/patientContext';
import { Wrapper } from '../Menu/styles';

export const PatientActual = ({ active }) => {
  const { actualPatient } = useContext(patientContext);

  useEffect(() => {
    console.log(actualPatient);
    console.log('aaaa');
  }, []);

  return (
    <Wrapper>
      <h1> 111 </h1>
    </Wrapper>
  );
};
