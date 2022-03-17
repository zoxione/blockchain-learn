import React from "react";
import { useSelector } from "react-redux";

import styles from './App.module.css';
import MainMenu from "./components/MainMenu";
import Page0 from "./pages/Page0";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page9 from "./pages/Page9";

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
                {page === 6 &&
                    <Page6 />
                }
                {page === 9 &&
                    <Page9 />
                }
            </div>
            <MainMenu />
        </div>
    )
}

export default App;
