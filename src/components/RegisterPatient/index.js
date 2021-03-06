import React, { useContext, useState } from 'react';
import userContext from '../../contexts/userContext';
import axios from 'axios';
import ReactLoading from 'react-loading';
import InputMask from 'react-input-mask';
import interroga from '../../assets/images/interroga.svg';
import Image from 'next/image';

import {
  Wrapper,
  Left,
  Right,
  DoubleInput,
  DivInput,
  ButtonDiv,
} from './styles';
import menuContext from '../../contexts/menuContext';

const ufArray = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MS',
  'MT',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

export const RegisterPatient = ({}) => {
  const { userInfo } = useContext(userContext);
  const { setMenuOption } = useContext(menuContext);
  const user = userInfo;
  const [name, setName] = useState('');
  const [sex, setSex] = useState('M');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('Solteiro');
  const [profession, setProfession] = useState('');
  const [healthInsurance, setHealthInsurance] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [cep, setCep] = useState('');
  const [state, setState] = useState('AC');
  const [cellphone, setCellphone] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeSex = (e) => {
    setSex(e.target.value);
  };
  const handleChangeBirthday = (e) => {
    setBirthday(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeRG = (e) => {
    setRg(e.target.value);
  };
  const handleChangeCPF = (e) => {
    setCpf(e.target.value);
  };
  const handleChangeMaritalStatus = (e) => {
    setMaritalStatus(e.target.value);
  };
  const handleChangeProfession = (e) => {
    setProfession(e.target.value);
  };
  const handleChangeHealthInsurance = (e) => {
    setHealthInsurance(e.target.value);
  };
  const handleChangeStreet = (e) => {
    setStreet(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleChangeCEP = (e) => {
    setCep(e.target.value);
  };
  const handleChangeState = (e) => {
    setState(e.target.value);
  };
  const handleChangeCellphone = (e) => {
    setCellphone(e.target.value);
  };
  const handleChangeNeighborhood = (e) => {
    setNeighborhood(e.target.value);
  };

  const CreatePatient = async (
    name,
    sex,
    email,
    birthday,
    cpf,
    rg,
    maritalStatus,
    profession,
    cellphone,
    healthInsurance,
    cep,
    street,
    number,
    neighborhood,
    state
  ) => {
    if (
      name !== '' &&
      sex !== '' &&
      email !== '' &&
      birthday !== '' &&
      cpf !== '' &&
      rg !== '' &&
      maritalStatus !== '' &&
      profession !== '' &&
      cellphone !== '' &&
      healthInsurance !== '' &&
      cep !== '' &&
      street !== '' &&
      number !== '' &&
      state !== '' &&
      neighborhood !== '' &&
      name !== null &&
      sex !== null &&
      email !== null &&
      birthday !== null &&
      cpf !== null &&
      rg !== null &&
      maritalStatus !== null &&
      profession !== null &&
      cellphone !== null &&
      healthInsurance !== null &&
      cep !== null &&
      street !== null &&
      number !== null &&
      state !== null &&
      neighborhood !== null &&
      name !== undefined &&
      sex !== undefined &&
      email !== undefined &&
      birthday !== undefined &&
      cpf !== undefined &&
      rg !== undefined &&
      maritalStatus !== undefined &&
      profession !== undefined &&
      cellphone !== undefined &&
      healthInsurance !== undefined &&
      cep !== undefined &&
      street !== undefined &&
      number !== undefined &&
      state !== undefined &&
      neighborhood !== undefined
    ) {
      setLoading(true);
      await axios
        .put('http://localhost:3000/api/doctor', {
          email: user.email,
          patients: [
            {
              name: name,
              sexo: sex,
              email: email,
              birthDate: birthday,
              cpf: cpf,
              rg: rg,
              status: maritalStatus,
              profession: profession,
              phone: cellphone,
              convenio: healthInsurance,
              anamnese: [],
              address: {
                cep: cep,
                street: street,
                number: number,
                state: state,
                district: neighborhood,
              },
            },
          ],
        })
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          return error;
        });
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <Wrapper>
      {loading && (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            top: 0,
            left: 0,
            zIndex: 5000,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.22)',
          }}
        >
          <ReactLoading
            type="spin"
            color="#ffffff"
            height={'20%'}
            width={'20%'}
          />
          <span
            style={{
              display: 'flex',
              position: 'relative',
              color: '#ffffff',
              fontSize: 30,
              top: '20%',
            }}
          >
            Carregando...
          </span>
        </div>
      )}
      <Left>
        <DivInput>
          <p>Nome</p>
          <input
            type="text"
            id="InputName"
            value={name}
            onChange={handleChangeName}
          />
        </DivInput>
        <DivInput>
          <p>Sexo</p>
          <div className="radioDiv" id="InputSex">
            <div>
              <input
                type="radio"
                name="gender"
                value="F"
                onChange={handleChangeSex}
              />
              <span>Feminino</span>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="M"
                onChange={handleChangeSex}
              />
              <span>Masculino</span>
            </div>
          </div>
        </DivInput>
        <DivInput>
          <p>Data de Nascimento</p>
          <InputMask
            mask="99/99/9999"
            type="text"
            id="InputBirthday"
            value={birthday}
            onChange={handleChangeBirthday}
          />
        </DivInput>
        <DivInput>
          <p>E-mail</p>
          <input
            type="text"
            id="InputEmail"
            value={email}
            onChange={handleChangeEmail}
          />
        </DivInput>
        <DivInput>
          <p>CPF</p>
          <InputMask
            mask="999.999.999-99"
            type="text"
            id="InputCPF"
            value={cpf}
            onChange={handleChangeCPF}
          />
        </DivInput>
        <DivInput>
          <p>RG</p>
          <InputMask
            mask="99.999.999-99"
            type="text"
            id="InputRG"
            value={rg}
            onChange={handleChangeRG}
          />
        </DivInput>
        <DivInput>
          <p>Estado Civil</p>
          <select
            name="maritalStatus"
            id="InputMaritalStatus"
            onChange={handleChangeMaritalStatus}
          >
            <option value="Solteiro">Solteiro</option>
            <option value="Casado">Casado</option>
            <option value="Separado">Separado</option>
            <option value="Vi??vo">Vi??vo</option>
          </select>
        </DivInput>
        <DivInput>
          <p>Profiss??o</p>
          <input
            type="text"
            id="InputProfession"
            value={profession}
            onChange={handleChangeProfession}
          />
        </DivInput>
        <DivInput>
          <p>Celular</p>
          <InputMask
            mask="(99) 9999-9999"
            type="text"
            id="InputCellphone"
            value={cellphone}
            onChange={handleChangeCellphone}
          />
        </DivInput>
      </Left>
      <Right>
        <div>
          <DivInput>
            <p>Conv??nio</p>
            <input
              type="text"
              id="InputHealthInsurance"
              value={healthInsurance}
              onChange={handleChangeHealthInsurance}
            />
          </DivInput>
          <DivInput className="street-input">
            <p>Rua</p>
            <input
              type="text"
              id="InputStreet"
              value={street}
              onChange={handleChangeStreet}
            />
          </DivInput>
          <DoubleInput className="street-input">
            <div className="small">
              <p>N??mero</p>
              <input
                type="text"
                id="InputNumber"
                value={number}
                onChange={handleChangeNumber}
              />
            </div>
            <div className="big">
              <div className="cepDiv">
                <p>CEP</p>
                <a href="https://achacep.com.br/" target="_blank">
                  <Image src={interroga} />
                </a>
              </div>
              <InputMask
                mask="99999-999"
                type="text"
                id="InputCEP"
                value={cep}
                onChange={handleChangeCEP}
              />
            </div>
          </DoubleInput>
          <DoubleInput>
            <div className="small">
              <p>UF</p>
              <select id="InputState" name="state" onChange={handleChangeState}>
                {ufArray.map((uf) => (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                ))}
              </select>
            </div>
            <div className="big">
              <p>Bairro</p>
              <input
                type="text"
                id="InputNeighborhood"
                value={neighborhood}
                onChange={handleChangeNeighborhood}
              />
            </div>
          </DoubleInput>
        </div>
        <ButtonDiv>
          <button
            id="resetBnt"
            type="reset"
            onClick={() => {
              setMenuOption(' ');
            }}
          >
            Cancelar
          </button>
          <button
            id="submitBnt"
            type="submit"
            onClick={() => {
              CreatePatient(
                name,
                sex,
                email,
                birthday,
                cpf,
                rg,
                maritalStatus,
                profession,
                cellphone,
                healthInsurance,
                cep,
                street,
                number,
                neighborhood,
                state
              );
              setMenuOption(' ');
            }}
          >
            Registrar paciente
          </button>
        </ButtonDiv>
      </Right>
    </Wrapper>
  );
};
