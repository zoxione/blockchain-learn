import React from "react";
import './App.css';

import Menu from "./components/Menu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.state = {page: 0, lang: "ru"};
  }

  start() {
    //this.setState({page: this.state.page + 1});
    this.setState(function(prevState, props) {
      return {
        page: prevState.page + 1
      };
    });
    console.log(this.state.page);
  }

  render () {
    return(
      <div>
        <div className="app">
          <h1>Blockchain Learn</h1> 
          <button className="button_start" onClick={this.start}>Играть</button>
        </div>
        <Menu />
      </div>
    )
  };
}

export default App;
