import React from "react";
import './First.css';

import blockchain from './blockchain.jpg'

class First extends React.Component {
    render() {
        return (
            <div className="first">
                <h1>Блокчейн - это</h1>
                <p>Блокчейн – это распределенная база данных. Представляет собой цепочку записей (блоков), которые нельзя поменять.</p>
                <img src={blockchain} alt="blockchain" />
            </div>
        )
    };
}

export default First;