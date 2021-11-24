import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import userContext from '../../contexts/userContext';
import Image from 'next/image';

import { Wrapper, Card } from './styles';

const listP1 = [
  {
    name: 'jotinha',
    sexo: 'M',
    email: 'jota@.com',
    birthDate: '12/05/2000',
    cpf: '12332132145',
    rg: '12312312',
    status: 'solteiro',
    profession: 'Desenvolvedor',
    phone: '81912344321',
    convenio: 'UNIFG',
    anamnese: 'a',
    adress: {
      cep: '55760000',
      street: 'Rua da manguerinha',
      number: '69',
      state: 'PE',
      district: 'Gaibu',
    },
  },
  {
    name: 'lele',
    sexo: 'M',
    email: 'lele@.com',
    birthDate: '12/05/2000',
    cpf: '12332132145',
    rg: '12312312',
    status: 'solteiro',
    profession: 'Desenvolvedor',
    phone: '81912344321',
    convenio: 'UNIFG',
    anamnese: 'a',
    adress: {
      cep: '55760000',
      street: 'Rua da manguerinha',
      number: '69',
      state: 'PE',
      district: 'Gaibu',
    },
  },
];

export const ListPatients = ({ active }) => {
  const [aa, setAa] = useState([{}, {}]);

  // async function gett() {
  //   try {
  //     let response = await axios.get(
  //       `http://localhost:3000/api/doctor/nathan.lucena89@gmail.com`
  //     );
  //     setListP({ a: 1 });
  //     console.log(response.data);
  //   } catch (err) {
  //     alert(err);
  //   }
  // }

  const [listP, setListP] = useState({});

  const getBanco = async () => {
    await axios
      .get('http://localhost:3000/api/doctor/nathan.lucena89@gmail.com')
      .then((response) => {
        let x = response;
        setListP(x);
        console.log(listP);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // async function getBd() {
  //   try {

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  useEffect(() => {
    getBanco();
  }, []);

  // useEffect(() => {
  //   console.log(listP);
  // });

  function genderImage(gender) {
    if (gender === 'F') {
      return 'https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_user_people_person_avatar_black_tone_icon_159361.png';
    } else {
      return 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_man_boy_person_avatar_people_white_tone_icon_159357.png';
    }
  }

  function ageFunc(age) {
    return 2021 - parseInt(age.substr(6));
  }

  return (
    <Wrapper>
      <div className="aa">
        <h1>Buscar pacientes</h1>
        <input type="text" />
      </div>
      <div className="block-cards">
        <Card>
          {/* <Image src={genderImage(`${listP1[0].sexo}`)} alt="aa" /> */}
          <img
            src="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_user_people_person_avatar_black_tone_icon_159361.png"
            alt="female"
          />
          <div>
            <h1>{listP1[0].name}</h1>
            <h3>{ageFunc(listP1[0].birthDate)} Anos</h3>
          </div>
        </Card>
      </div>
    </Wrapper>
  );
};
