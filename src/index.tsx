import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component<{value:string, onClick:any}/*, {value:string}*/> {
/*  constructor(props) {
    super(props);
    this.state = {value:''};
  }*/

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component<any, {squares:Array<string>, click:number}> {
  constructor(props) {
    super(props);
    this.state = {squares: Array(9).fill(null), click:0};
  }

  handleClick(i:number) {
    const squares = this.state.squares.slice();
    if(!squares[i] && !calculateWinner(squares)) {
      squares[i] = (this.state.click % 2 == 0?'X':'O');
      this.setState({squares:squares});
      this.setState({click:this.state.click+1});
     }
  }

  renderSquare(i:number) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
  }

  render() {
    var status = '';
    if(!calculateWinner(this.state.squares)) status = 'Next player: '+(this.state.click % 2 == 0?'X':'O');
    else status = 'Winner: '+ calculateWinner(this.state.squares);

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares:Array<string>):string {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return '';
}