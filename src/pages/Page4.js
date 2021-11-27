import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Page from "../components/Page";

function Page4() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    
    const nextPage = (_page) => {
        dispatch({type: "SET_PAGE", payload: page + 1})
    }
    
    return (
        <Page>
            <h1>Смарт-контракты</h1>
            <p>Смарт-контракты - это простые программы, которые хранятся в блокчейне и могут автоматически выполнятся при достижении определенных условий. Такая технология может использоваться не только в криптовалюте, но и в повседных вещах, например, для хранения и обработки персональных данных, в маркетинге и компьютерных играх. </p>
            <button className="button_next" onClick={() => nextPage()}>Понятно</button>
        </Page>
    )
}

export default Page4;