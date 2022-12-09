import React from 'react';
import './App.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    })); // 이전 state값을 반대로 할당하기
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'on' : 'off'}
      </button>
    );
  }
}

function App() {
  return (
    <div>
      <Toggle />
    </div>
  );
}

export default App;
