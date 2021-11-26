import React from "react";
import './App.css';

import Menu from "./components/Menu";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

import GlobalStateContext from "./components/global-state-context";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setPage = (_page) => {
      this.setState(state => ({
        page: _page,
      }));
    };

    this.toggleLanguage = () => {
      this.setState(state => ({
        language: state.language === "rus" ? "eng" : "rus",
      }));
    };

    this.toggleSound = () => {
      this.setState(state => ({
        isSound: state.isSound === true ? false : true,
      }));
    };
    
    this.state = {
      page: 0,
      setPage: this.setPage,
      language: "rus",
      toggleLanguage: this.toggleLanguage,
      isSound: true,
      toggleSound: this.toggleSound,
    };
  }

  render() {
    return (
      <GlobalStateContext.Provider value={this.state}>
        <div className="app">
          <div className="main">
            {this.state.page === 0 &&
              <div className="page_zero">
                <h1>Что такое блокчейн?</h1>
                <p>Длительность: 30 мин • CryptoAlliance 2021</p>
                <button className="button_start" onClick={this.setPage.bind(this, this.state.page + 1)}>Играть</button>
              </div>
            }
            {this.state.page === 1 &&
              <div>
                <Page1 />
                <button className="button_next" onClick={this.setPage.bind(this, this.state.page + 1)}>Понятно</button>
              </div>
            }
            {this.state.page === 2 &&
              <div>
                <Page2 />
                <button className="button_next" onClick={this.setPage.bind(this, this.state.page + 1)}>Понятно</button>
              </div>
            }
            {this.state.page === 3 &&
              <div>
                <Page3 />
                <button className="button_next" onClick={this.setPage.bind(this, this.state.page + 1)}>Понятно</button>
              </div>
            }
            {this.state.page === 4 &&
              <div>
                <Page4 />
                <button className="button_next" onClick={this.setPage.bind(this, this.state.page + 1)}>Понятно</button>
              </div>
            }
          </div>
          <Menu page={this.state.page} />
        </div>
      </GlobalStateContext.Provider>
    )
  };
}

export default App;
