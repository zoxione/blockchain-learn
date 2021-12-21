import React from "react";
import { useSelector } from "react-redux";

import styles from './App.module.css';
import Menu from "./components/Menu/index";
import Page0 from "./pages/Page0/index";
import Page1 from "./pages/Page1/index";
import Page2 from "./pages/Page2/index";
import Page3 from "./pages/Page3/index";
import Page4 from "./pages/Page4/index";
import Page5 from "./pages/Page5/index";

function App() {
  const page = useSelector(state => state.page);

  return (
    <div>
        <div className={styles.main}>
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
            {page === 5 &&
                <Page5 />
            }
        </div>
        <Menu />
    </div>
  )
}

export default App;
