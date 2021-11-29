import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: row;
  margin-left: -10% !important;  
  margin-top: -3%!important;  
  justify-content: space-between;
  font-weight: 600;
  color: #1D6631;
  p{
    font-size:14px;
    margin: 0px;
    padding:0 10px;
  }
  .street-input{
    margin-top: -2.5px !important;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 49%;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 49%;
`;

export const DivInput = styled.div`

  margin-bottom: 10px;
  input[type=text]{
    width: 500px;
    height: 40px ;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #95FAB1;
    margin-top: 5px;
    padding-left: 10px;
  }

  .radioDiv{
    width: 500px;
    height: 40px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  
  select{
    width: 500px;
    height: 40px ;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #95FAB1;
    margin-top: 5px;
    padding-left: 10px;
  }
`;

export const DoubleInput = styled.div` 
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .small {
    input[type=text]{
      width: 100px;
      height: 40px ;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      background-color: #95FAB1;
      padding-left: 10px;
      margin-top: 5px;
    }
  
    select{
      width: 100px;
      height: 40px ;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      background-color: #95FAB1;
      margin-top: 5px;
      padding-left: 10px;
    }
  } 
  .big{
    margin-left: 30px;
    input[type=text]{
      margin-top: 5px;
      width: 370px;
      height: 40px ;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
      background-color: #95FAB1;
      padding-left: 10px;
    }
  }
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;

  button{
    font-size: 14px;
    color: #1D6631;
    font-weight: 600;
    border: 0;
    border-radius: 5px;
    height: 40px;
    width: 200px;
    transition: 0.3s;
    cursor: pointer;
  }

  #submitBnt{ 
    background-color: #48F077;
  
    &:hover {
      background-color: #1D6631;
      color: #48F077;
    }
  }

  #resetBnt{
    background-color: #95FAB1;
    
    &:hover {
      background-color: #1D6631;
      color: #48F077;
    }
  }
`;
