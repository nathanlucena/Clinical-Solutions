import styled from 'styled-components';

// Create a Wrapper component that'll render a <section> tag with some styles
export const Wrapper = styled.div`
  height: 100vh;
  width: 18rem;
  background: #b5f9c8;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: #1d6631;
`;

export const Line = styled.div`
  width: 90%;
  border-bottom: 1px solid #48f077;
  margin-left: 5%;
`;

export const Option = styled.div`
  min-height: 2.5rem;
  margin: 0.5rem;
  padding: 0.5em 0 0.5em;
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding-left: 5%;
  background: ${(props) => (props.active ? '#48F077' : '')};

  &:hover {
    background: #48f077;
    box-shadow: 0px 0px 0px 1px rgba(29, 102, 49, 0.6);
  }

  &.active {
    color: ${(props) => props.theme.orange};
  }
`;
