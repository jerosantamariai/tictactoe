import React from 'react';
import ReactDOM from 'react-dom';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

//custom CSS
import "./index.css"

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

/*      4   5   6
    1   
    2  
    3               */

function TicTacToe(props) {
    return (
        <div className="container">
            <div className="header">
                <h1>Tic Tac Toe in React.js</h1>
            </div>
            <div className="gamespace">
                <div className="onefour"></div>
                <div className="onefive"></div>
                <div className="onesix"></div>
            </div>
                

            
        </div>
    )
}


ReactDOM.render(<TicTacToe />, document.querySelector("#root"));