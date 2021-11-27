import React from "react";
import Page from "../components/Page";
import GlobalStateContext from '../components/global-state-context';

import blockchain from './blockchain.jpg'

class Page1 extends React.Component {
    render() {
        return (
            <GlobalStateContext.Consumer>
                {({ page, setPage }) => (
                    <Page>
                        <h1>Блокчейн - это...</h1>
                        <p>Блокчейн – это распределенная база данных. Представляет собой цепочку записей (блоков), которые нельзя поменять.</p>
                        <img src={blockchain} alt="blockchain" />
                        <button className="button_next" onClick={setPage.bind(this, 2)}>Понятно</button>
                    </Page>
                )}
            </GlobalStateContext.Consumer>
        )
    };
}

export default Page1;