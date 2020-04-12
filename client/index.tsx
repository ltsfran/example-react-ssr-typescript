import React from 'react';

export const App = () => {
  const handleClick = () => {
    console.log('click');
  };

  return(
    <div onClick={handleClick}>Probando</div>
  );
};
