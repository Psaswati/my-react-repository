import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      { /* <Greet name="Bruce" heroname="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroname="Superman">
        <button>Submit</button>
      </Greet>
      <Greet name="Diana" heroname="Wonder Woman" />

      <Welcome name="Bruce" heroname="Batman">
        <p>This is children props</p>
      </Welcome>
      <Welcome name="Clark" heroname="Superman">
        <button>Submit</button>
      </Welcome>
      <Welcome name="Diana" heroname="Wonder Woman">
        <a href="#">This is a link</a>
      </Welcome>

      <Hello />*/ }
      <Message />
      <Counter />
    </div>
  );
}

export default App;
