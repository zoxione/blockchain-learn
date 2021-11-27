import React from "react";
import { useSelector } from "react-redux";
import './App.css';

import Menu from "./components/Menu";
import Page0 from "./pages/Page0";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

function App() {
  const page = useSelector(state => state.page);

  return (
    <div className="app">
        <div className="main">
            {page === 0 &&
                <Page0 />
            }
            {page === 1 &&
                <Page1 />
            }
            {page === 2 &&
                <Page2 />
            }
            {page === 3 &&
                <Page3 />
            }
            {page === 4 &&
                <Page4 />
            }
        </div>
        <Menu />
    </div>
  )
}

export default App;
