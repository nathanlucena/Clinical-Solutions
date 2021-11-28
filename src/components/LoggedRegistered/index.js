import React, { useContext } from 'react';
import userContext from '../../contexts/userContext';
import { ListPatients } from '../ListPatients';
import { RegisterPatient } from '../RegisterPatient';

import { Wrapper, Option } from './styles';

export const LoggedRegistered = ({ active }) => {
  const { userInfo } = useContext(userContext);
  const user = userInfo;

  return (
    <Wrapper>
      <RegisterPatient/> 
      {/* <ListPatients /> */}
    </Wrapper>
  );
};
