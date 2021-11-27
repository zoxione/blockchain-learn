import React from "react";
import Page from "../components/Page";
import GlobalStateContext from '../components/global-state-context';

class Page0 extends React.Component {
    render() {
        return (
            <GlobalStateContext.Consumer>
                {({ page, setPage }) => (
                    <Page>
                        <h1>Что такое блокчейн?</h1>
                        <p>Длительность: 30 мин • CryptoAlliance 2021</p>
                        <button className="button_start" onClick={setPage.bind(this, 1)}>Играть</button>
                    </Page>
                )}
            </GlobalStateContext.Consumer>
        )
    };
}

export default Page0;