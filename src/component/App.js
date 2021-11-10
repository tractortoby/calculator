import React, { useState, useEffect } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

// export default class App extends React.Component {
//   state = {
//     total: null,
//     next: null,
//     operation: null,
//   };

//   handleClick = buttonName => {
//     this.setState(calculate(this.state, buttonName));
//   };

//   render() {
//     return (
//       <div className="component-app">
//         <Display value={this.state.next || this.state.total || "0"} />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </div>
//     );
//   }
// }

function App() {
  const initialState = {
    total: null,
    next: null,
    operation: null,
  }

  const [state, setState] = useState(initialState)

  const handleClick = buttonName => {
    setState(calculate(state, buttonName));
  };

  return (
    <div className="component-app">
      <Display value={state.next || state.total || "0"} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;
