import React, { useContext, useState } from 'react';
import menuContext from '../../contexts/menuContext';
import userContext from '../../contexts/userContext';
import listContext from '../../contexts/listContext';
import { Wrapper, Option, Line } from './styles';
import axios from 'axios';

export const Menu = (options) => {
  const [clicked, setClicked] = useState('');
  const [listP, setListP] = useState([]);

  const { setMenuOption } = useContext(menuContext);
  const { userInfo } = useContext(userContext);
  const { setListPatients } = useContext(listContext);

  function handleClick(i) {
    if (i !== clicked) {
      setClicked(i);
    }
  }

  const optionsArray = options.options;

  const getBanco = async (email) => {
    const response = await axios.get(
      'http://localhost:3000/api/doctor/' + email
    );
    let resp = response;
    console.log(resp.data?.patients);
    if (listP !== resp.data?.patients) {
      setListPatients(resp.data?.patients);
    }
  };

  const handleList = (option) => {
    console.log(userInfo.email);
    if (clicked !== option) {
      if (option === 'Lista de Pacientes') {
        getBanco(userInfo.email);
      }
    }
  };

  return (
    <Wrapper>
      {optionsArray.map((i) => (
        <div key={i}>
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
            }}
          >
            {i}
          </Option>
          <Line />
        </div>
      ))}
    </Wrapper>
  );
};
