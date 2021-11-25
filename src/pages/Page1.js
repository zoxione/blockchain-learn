import React from "react";
import Page from "../components/Page";

import blockchain from './blockchain.jpg'

class Page1 extends React.Component {
    render() {
        return (
            <Page>
                <h1>Блокчейн - это...</h1>
                <p>Блокчейн – это распределенная база данных. Представляет собой цепочку записей (блоков), которые нельзя поменять.</p>
                <img src={blockchain} alt="blockchain" />
            </Page>
        )
    };
}

export default Page1;