import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import userContext from '../../contexts/userContext';
import Image from 'next/image';

import { Wrapper, Card } from './styles';

export const ListPatients = ({ active }) => {
  const [listP, setListP] = useState([]);

  const getBanco = async (email) => {
    await axios
      .get('http://localhost:3000/api/doctor/' + email)
      .then((response) => {
        let resp = response;
        if (listP !== resp.data.patients) {
          setListP(resp.data.patients);
        }
      })
      .catch((e) => {
        return e;
      });
  };

  useEffect(() => {
    getBanco();
  }, [listP]);

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
      {listP !== [] && listP !== undefined && listP !== null ?
        (listP.map((item) => {
            return (
              <div key={item.rg} className="block-cards">
                <Card>
                  {item.sexo === "F" ? (
                    <img
                      src="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_user_people_person_avatar_black_tone_icon_159361.png"
                      alt="female"
                    />
                  ) : (
                    <img
                      src="https://cdn.icon-icons.com/icons2/2643/PNG/512/female_woman_user_people_person_avatar_black_tone_icon_159361.png"
                      alt="male"
                    />
                  )}
                  <div>
                    <h1>{item.name}</h1>
                    <h3>{ageFunc(item.birthDate)} Anos</h3>
                  </div>
                </Card>
              </div>
            )
          })
        )
        : null}
    </Wrapper>
  );
};
