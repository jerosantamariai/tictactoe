import React from 'react';
import './index.css';
import Board from './components/board';
import Winner from './components/Winner';
import Form from './components/Form';

const styleTop = {
  backgroundColor: 'gray',
  width: "50%",
  height: "32rem",
  margin: "5% auto",
}

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: "",
      invisible: "d-none",
      visual: 1,
      symbol: "",
      player1: "",
      player2: "",
      winner: "",
      playerdesicion1: "",
      playerdesicion2: "",
      player: "",
    }

    this.goForm = this.goForm.bind(this);
    this.desiccion = this.desiccion.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  desiccion(e) {
    e.preventDefault();
    let a = document.getElementById(e.target.id);
    a.innerHTML = `${this.state.symbol}`
    this.state.symbol === "X" ? this.setState({ symbol: "0" }) : this.setState({ symbol: "X" });
    a.style.pointerEvents = "none";
    let div1 = document.getElementById("div1").textContent;
    let div2 = document.getElementById("div2").textContent;
    let div3 = document.getElementById("div3").textContent;
    let div4 = document.getElementById("div4").textContent;
    let div5 = document.getElementById("div5").textContent;
    let div6 = document.getElementById("div6").textContent;
    let div7 = document.getElementById("div7").textContent;
    let div8 = document.getElementById("div8").textContent;
    let div9 = document.getElementById("div9").textContent;

    if (div1 === "X" && div5 === "X" && div9 === "X" ||
      div3 === "X" && div5 === "X" && div7 === "X" ||
      div1 === "X" && div4 === "X" && div7 === "X" ||
      div2 === "X" && div5 === "X" && div8 === "X" ||
      div3 === "X" && div6 === "X" && div9 === "X" ||
      div1 === "X" && div2 === "X" && div3 === "X" ||
      div4 === "X" && div5 === "X" && div6 === "X" ||
      div7 === "X" && div8 === "X" && div9 === "X") {

      if (this.state.playerdesicion1 === "X") {
        this.setState({ winner: this.state.player1 })
        this.setState({ visual: 3 })
        console.log("ganador 1")
      } else {
        this.setState({ winner: this.state.player2 })
        this.setState({ visual: 3 })
        console.log("ganador 2")
      }

    } else if (div1 === "0" && div5 === "0" && div9 === "0" ||
      div3 === "0" && div5 === "0" && div7 === "0" ||
      div1 === "0" && div4 === "0" && div7 === "0" ||
      div2 === "0" && div5 === "0" && div8 === "0" ||
      div3 === "0" && div6 === "0" && div9 === "0" ||
      div1 === "0" && div2 === "0" && div3 === "0" ||
      div4 === "0" && div5 === "0" && div6 === "0" ||
      div7 === "0" && div8 === "0" && div9 === "0") {

      if (this.state.playerdesicion1 === "0") {
        this.setState({ winner: this.state.player1 })
        this.setState({ visual: 3 })
        console.log("ganador 1")
      } else {
        this.setState({ winner: this.state.player2 })
        this.setState({ visual: 3 })
        console.log("ganador 2")
      }
    }
  }

  handleInput(y) {
    let v = document.getElementById(y.target.id).value;
    if (y.target.id === "input1") {
      this.setState({ player1: v })
    }
    else {
      this.setState({ player2: v })
    }
    console.log(y.target.id)
  }

  goForm(e) {
    e.preventDefault();
    if (document.getElementById("input1").value === "" || document.getElementById("input2").value === "") {
      alert("Fill inputs!")
    } else if (document.getElementById("input1").value === document.getElementById("input2").value) {
      alert("The names is the same!")
    }
    else {
      this.setState({ visual: 2 });
      let b = document.getElementById(e.target.id);
      this.setState({ symbol: b.textContent },
        () => {
          if (this.state.symbol === "X") {
            this.setState({ playerdesicion1: "X" })
            this.setState({ playerdesicion2: "0" })
            console.log(this.state.playerdesicion1, this.state.playerdesicion2)
          } else {
            this.setState({ playerdesicion1: "0" })
            this.setState({ playerdesicion2: "X" })
            console.log(this.state.player1)
            console.log(this.state.player2)
          }
        })
      console.log(b.textContent)
    }
  }

  render() {
    return (
      <div className="container text-center p-2" id="gamecontainer" style={styleTop}>
        <h1 className="mt-2 mb-0" style={{ color: 'white' }}>Tic Tac Toe</h1>
        <div className={this.state.visual === 1 ? this.state.visible : this.state.invisible}><Board select={this.goForm} handleInput={this.handleInput} /></div>
        <div className={this.state.visual === 2 ? this.state.visible : this.state.invisible}><Form player={this.state.symbol} symbol={this.state.symbol} desiccion={this.desiccion} /></div>
        <div className={this.state.visual === 3 ? this.state.visible : this.state.invisible}><Winner playero={this.state.winner} /></div>
      </div>
    )
  }
}


export default TicTacToe;