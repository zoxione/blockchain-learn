import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Page from "../components/Page";

function Page2() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    
    const nextPage = (_page) => {
        dispatch({type: "SET_PAGE", payload: page + 1})
    }

    return (
        <Page>
            <h2>Один блок содержит:</h2>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <div className="tripleBlock">
                    <div className="tripleBlock_1" />
                    <div className="tripleBlock_2" />
                    <div className="tripleBlock_3" />
                </div>
                <div>
                    <p>• информация</p>
                    <p>• уникальный хэш</p>
                    <p>• хэш предыдущего блока</p>
                </div>
            </div>
            <p>Информация может быть любой, например, в блокчейне биткоина хранится информация о отправителе, получателе и сумме транзакции. Когда блок создан сразу вычисляется его хэш. Изменения внутри блока изменят его хэш. Третий элемент - это хэш предыдущего блока, благодаря которому эффективно создается цепочка блоков и обеспечивается ее безопасность.</p>
            <button className="button_next" onClick={() => nextPage()}>Понятно</button>
        </Page>
    )
}

export default Page2;