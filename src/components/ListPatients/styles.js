import styled from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  padding-top: 50px;
  color: #1d6631;

  .patient-list-grid{
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    grid-template-rows: 26% auto;
    margin-top: 35px;
    margin-bottom: 85px;
    overflow: auto;
    height: 55vh;
    &::-webkit-scrollbar{
      background-color: #ffffff;
      width: 10px
    }
    &::-webkit-scrollbar-thumb{
      background-color: #48F077;
      border-radius: 5px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  padding: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 15px;
  font-size: 14px;
  background-color: #b5f9c8;
  .container-profile{
    display: flex;
    flex-direction: row;
  }
  .profile-pic {
    margin-top: -5px;
    margin-right: 25px;
    width: 50px;
    height: 50px;
  }
  .profile-text{
    display: flex;
    flex-direction: column;
    margin-top: -5px;
    height: 50px;
    font-size: 16px;
  }
  .name-text{
    //display: flex;
    width: 100px;
    height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`;

