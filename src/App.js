import React from "react";
import './App.css';

import Menu from "./components/Menu";
import Page0 from "./pages/Page0";
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
        <div>
          <div className="main">
            {this.state.page === 0 &&
              <Page0 />
            }
            {this.state.page === 1 &&
              <Page1 />
            }
            {this.state.page === 2 &&
              <Page2 />
            }
            {this.state.page === 3 &&
              <Page3 />
            }
            {this.state.page === 4 &&
              <Page4 />
            }
          </div>
          <Menu />
        </div>
      </GlobalStateContext.Provider>
    )
  };
}

export default App;
