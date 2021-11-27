import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Page from "../components/Page";
import blockchain from './blockchain.jpg'

function Page1() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    const language = useSelector(state => state.language);
    
    const nextPage = (_page) => {
        dispatch({type: "SET_PAGE", payload: page + 1})
    }

    return (
        <Page>
            { language === "rus" &&
                <>
                    <h1>Блокчейн - это...</h1>
                    <p>Блокчейн – это распределенная база данных. Представляет собой цепочку записей (блоков), которые нельзя поменять.</p>
                    <img src={blockchain} alt="blockchain" />
                    <button className="button_next" onClick={() => nextPage()}>Понятно</button>
                </>
            }
            { language === "eng" &&
                <>
                    <h1>Blockchain is...</h1>
                    <p>Blockchain is a distributed database. It is a chain of records (blocks) that cannot be changed.</p>
                    <img src={blockchain} alt="blockchain" />
                    <button className="button_next" onClick={() => nextPage()}>Clearly</button>
                </>
            }
        </Page>
    )
}

export default Page1;