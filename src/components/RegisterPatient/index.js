import { Formik } from 'formik';
import React, {useContext} from 'react';
import userContext from '../../contexts/userContext';

import { Wrapper, Option, Left, Right, DoubleInput, DivInput, ButtonDiv } from './styles';

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
]

export const RegisterPatient = ({active}) => {
  const { userInfo } = useContext(userContext);
  const user = userInfo;
  return (
    
              <Formik
                initialValues={{
                  name: "",
                  specialty: "",
                  email: "",
                  clinicalName: "",
                  activationKey: "",
                }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }
                    , 1000);
                }}
              >
                {props => (
                  <form onSubmit={props.handleSubmit}>
                    <Wrapper>
                        <Left>
                            <DivInput>
                                <p>Nome</p>
                                <input type="text" id="InputName"/>
                            </DivInput>
                            <DivInput>
                                <p>Sexo</p>
                                <div className="ratdioDiv">
                                    <div>
                                        <input type="radio" name="gender" value="F"/>
                                        <span>Feminino</span>
                                    </div>
                                    <div>
                                        <input type="radio"  name="gender" value="M"/>
                                        <span>Masculino</span>
                                    </div>
                                </div>
                            </DivInput>
                            <DivInput>
                                <p>Data de Nascimento</p>
                                <input type="text" id="InputName"/>
                            </DivInput>
                            <DivInput>
                                <p>E-mail</p>
                                <input type="text" id="InputName"/>
                            </DivInput>
                            <DivInput>
                                <p>CPF</p>
                                <input type="text" id="InputName"/>
                            </DivInput>
                            <DivInput>
                                <p>RG</p>
                                <input type="text" id="InputName"/>
                            </DivInput>
                            <DivInput>
                                <p>Estado Civil</p>
                                <select name="matrialStatus" id="cars">
                                    <option value="Solteiro">Solteiro</option>
                                    <option value="Casado">Casado</option>
                                    <option value="Separado">Separdo</option>
                                    <option value="Viúvo">Viúvo</option>
                                </select>
                           </DivInput>
                            <DivInput>
                                <p>Profissão</p>
                                <input type="text" id="InputName"/>
                            </DivInput>
                            <DivInput>
                                <p>Celular</p>
                                <input type="text" id="InputName"/>
                            </DivInput>
                        </Left>
                        <Right>
                            <div> 
                             <DivInput>
                                <p>Convênio</p>
                                <input type="text" id="InputName"/>
                            </DivInput>
                            <DivInput>
                                <p>Rua</p>
                                <input type="text" id="InputName"/>
                            </DivInput>
                            <DoubleInput>
                                    <div className="small">
                                        <p>Número</p>
                                        <input type="text" id="InputName"/>
                                    </div>  
                                    <div className="big">
                                        <p>CEP</p>
                                        <input type="text" id="InputName"/>
                                    </div> 
                            </DoubleInput>
                            <DoubleInput>
                                <div className="small">
                                    <p>UF</p>
                                    <select id="estado" name="estado">
                                         {ufArray.map((uf)=>
                                            <option value={uf}>{uf}</option>
                                        )} 
                                    </select>
                                </div>  
                                <div className="big">
                                    <p>Bairro</p>
                                    <input type="text" id="InputName"/>
                                </div> 
                            </DoubleInput>
                            </div>
                            <ButtonDiv>
                                <button
                                        id="resetBnt"
                                        type="reset"
                                    >
                                    Cancelar
                                </button>
                                <button
                                    id="submitBnt"
                                    type="submit"
                                  
                                >
                                    Registrar paciente
                                </button>
                            </ButtonDiv>
                        </Right>
                        </Wrapper>
                  </form>
                )}
              </Formik>
  );
}
