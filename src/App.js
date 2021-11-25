import React from "react";
import './App.css';

import Menu from "./components/Menu";
import First from "./pages/First";

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
      <div className="app">
        <div className="main">
          { this.state.page === 0 &&
            <div className="page_zero">
              <h1>Что такое блокчейн?</h1>
              <p>длительность: 30 мин • CryptoAlliance, декабрь 2021</p> 
              <button className="button_start" onClick={this.start}>Играть</button>
            </div>
          }
          { this.state.page === 1 &&
            <First />
          }
        </div>
        <Menu page={this.state.page} />
      </div>
    )
  };
}

export default App;
