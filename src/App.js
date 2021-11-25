import React from "react";
import './App.css';

import Menu from "./components/Menu";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.state = {page: 0, lang: "ru"};
  }

  nextPage(page) {
    //this.setState({page: this.state.page + 1});
    this.setState(function(prevState, props) {
      return {
        page: prevState.page + 1
      };
    });
    console.log(page);
  }

  render () {
    return(
      <div className="app">
        <div className="main">
          { this.state.page === 0 &&
            <div className="page_zero">
              <h1>Что такое блокчейн?</h1>
              <p>Длительность: 30 мин • CryptoAlliance 2021</p> 
              <button className="button_start" onClick={this.nextPage}>Играть</button>
            </div>
          }
          { this.state.page === 1 &&
            <div>
              <Page1 />
              <button className="button_next" onClick={this.nextPage}>Понятно</button>
            </div>
          }
          { this.state.page === 2 &&
            <div>
              <Page2 />
              <button className="button_next" onClick={this.nextPage}>Понятно</button>
            </div>
          }
          { this.state.page === 3 &&
            <div>
              <Page3 />
              <button className="button_next" onClick={this.nextPage}>Понятно</button>
            </div>
          }
          { this.state.page === 4 &&
            <div>
              <Page4 />
              <button className="button_next" onClick={this.nextPage}>Понятно</button>
            </div>
          }
        </div>
        <Menu page={this.state.page} />
      </div>
    )
  };
}

export default App;
