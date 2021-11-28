import styled from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  padding-top: 50px;
  color: #1d6631;
  .patient-list-grid{
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    margin-top: 15px;
  }
`;

export const Card = styled.div`
  width: 200px;
  height: 100px;
  padding: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 15px;
  font-size: 14px;
  background-color: #b5f9c8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .container-profile{
    display: flex;
    flex-direction: row;
  }
  .profile-pic {
    margin: 15px;
    width: 15px;
    height: 15px;
  }
`;

