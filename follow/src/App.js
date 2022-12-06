import React from 'react';
import './App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    // clearInterval을 쓸 수 있게 변수로 저장한 것일뿐 함수 실행되는 건
    // 변수 저장 안하는 거랑 똑같음
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </>
    );
  }
}

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}

export default App;
