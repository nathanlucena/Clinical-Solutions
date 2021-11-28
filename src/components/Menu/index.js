import React, { useContext, useState } from 'react';
import menuContext from '../../contexts/menuContext';
import { Wrapper, Option, Line } from './styles';

export const Menu = (options) => {
  const [clicked, setClicked] = useState(true);

  const { setMenuOption } = useContext(menuContext);

  function handleClick(index) {
    if (index === clicked) {
      setClicked('');
    } else {
      setClicked(index);
    }
  }

  const optionsArray = options.options;

  return (
    <Wrapper>
      {optionsArray.map((i) => (
        <div key={i}>
          <Option
            style={
              i === clicked
                ? {
                    backgroundColor: '#48F077',
                  }
                : {
                    backgroundColor: '',
                  }
            }
            onClick={() => {
              handleClick(i), setMenuOption(i);
            }}
          >
            {i}
          </Option>
          <Line />
        </div>
      ))}
    </Wrapper>
  );
};
