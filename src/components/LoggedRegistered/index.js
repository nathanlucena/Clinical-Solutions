import React, { useContext } from 'react';
import menuContext from '../../contexts/menuContext';
import { ListPatients } from '../ListPatients';
import { RegisterPatient } from '../RegisterPatient';

import { Wrapper } from './styles';

export const LoggedRegistered = ({ active }) => {
  const { menuOption } = useContext(menuContext);

  return (
    <Wrapper>
      {menuOption === 'Cadastro' ? (
        <RegisterPatient />
      ) : menuOption === 'Lista de Pacientes' ? (
        <ListPatients />
      ) : (
        ''
      )}
    </Wrapper>
  );
};
