import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  font-weight: 600;
  color: #1D6631;

  p{
        margin: 0px;
        padding:0 10px;
    }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    
`;

export const DivInput = styled.div`

    margin-bottom: 10px;

  input[type=text]{
    width: 500px;
    height: 50px ;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #95FAB1;
    margin-top: 5px;
  }

    .ratdioDiv{
        width: 500px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        
    }

  
  select{
    width: 500px;
    height: 50px ;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #95FAB1;
     margin-top: 5px;
  }
`;

export const DoubleInput = styled.div` 
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .small{

    input[type=text]{
        width: 100px;
        height: 50px ;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
        background-color: #95FAB1;
        margin-top: 5px;
        
   }

   select{
        width: 100px;
        height: 50px ;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
        background-color: #95FAB1;
        margin-top: 5px;
   }
}
  
  .big{
    margin-left:30px;

    input[type=text]{
    margin-top: 5px;
    width: 370px;
    height: 50px ;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #95FAB1;
  }
}
`;

export const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10px;
   
    button{
        font-size: 110%;
        color: #1D6631;
        font-weight: 600;
        border: 0;
        border-radius: 5px;
        height: 50px;
        width: 200px;
        transition: 0.3s;
        cursor: pointer;
    }

    #submitBnt{ 
        background-color: #48F077;
      
        &:hover {
          background-color: #000;
  }
    }

    #resetBnt{
        background-color: #95FAB1;
        
        &:hover {
         background-color: #000;
  }
    }
`;
