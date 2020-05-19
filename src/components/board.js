import React from 'react';

const styleChoosePlayer = {
  backgroundColor: 'gray',
  width: "70%",
  height: "14rem",
  margin: "12% auto",
  padding: "1rem"
}

const styleButtonX = {
  backgroundColor: 'rgb(50,50,50)',
  border: "none",
  color: "rgb(150,150,150)",
  marginTop: "10px",
  marginLeft: "50px",
  width: "30%",
  marginRight: "10px"
}

const styleButtonO = {
  backgroundColor: 'rgb(50,50,50)',
  border: "none",
  color: "rgb(150,150,150)",
  width: "30%",
  marginTop: "10px",
  marginLeft: "10px"
}

const styleInsideButton = {
  fontSize: "40px",
}


function Board(props) {

  return (
    <>
      <h3 style={{ color: 'white' }}></h3>
      <div style={styleChoosePlayer}>
        <h4 style={{ color: 'white' }}>Ingresen sus nombre y elije ficha:</h4>
        <form>
          <input type="text" className="mr-2" onChange={(y) => props.handleInput(y)} id="input1" placeholder="Primer Jugador"></input>
          <input type="text" onChange={(y) => props.handleInput(y)} id="input2" placeholder="Segundo Jugador"></input>
          <br />
          <button type="button" className="mr-5" style={styleButtonX} id="btnX" onClick={(e) => props.select(e)}><span id="spanX" style={styleInsideButton}>X</span></button>
          <button type="button" className="mr-5" style={styleButtonO} id="btnO" onClick={(e) => props.select(e)}><span id="spanO" style={styleInsideButton}>0</span></button>
        </form>
      </div>
    </>

  )
}


export default Board;