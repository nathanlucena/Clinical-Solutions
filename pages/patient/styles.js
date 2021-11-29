import styled from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  padding-top: 50px;
  color: #1d6631;
  .patient-list-grid {
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    margin-top: 15px;
  }
`;
