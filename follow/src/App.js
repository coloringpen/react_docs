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

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log('You clicked submit.');
  }

  function handleMouseLeave(e) {
    e.preventDefault();
    console.log(e);
    // nativeEvent에서 type이 mouseout으로 찍혀있음
    // 바닐라 자바스크립트로 mouseleave 이벤트 적용시키면 type에 mouseleave 이벤트 찍혀있음
    // 바닐라 자바스크립트로 mouseout 이벤트 적용시키면 type에 mouseout 이벤트 찍혀있음
    // ## 합성 이벤트는 브라우저 고유 이벤트에 직접 대응되지 않으며 다릅니다. ##
  }

  return (
    <form onSubmit={handleSubmit}>
      <button onMouseLeave={handleMouseLeave} type="submit">
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <div>
      <Clock />
      <Form />
    </div>
  );
}

export default App;
