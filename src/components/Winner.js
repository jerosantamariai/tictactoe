import React from 'react';

function Winner(props) {

  return (
    <>
      <h3 style={{ color: 'white' }}>El ganador es: {props.playero}</h3>
    </>
  )
}

export default Winner;