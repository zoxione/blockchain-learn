import React from "react";
import Page from "../components/Page";
import GlobalStateContext from '../components/global-state-context';

class Page2 extends React.Component {
    render() {
        return (
            <GlobalStateContext.Consumer>
                {({ page, setPage }) => (
                    <Page>
                        <h1>Один блок содержит:</h1>
                        <ul>
                            <li>информация</li>
                            <li>уникальный хэш</li>
                            <li>хэш предыдущего блока</li>
                        </ul>
                        <p>Информация может быть любой, например, в блокчейне биткоина хранится информация о отправителе, получателе и сумме транзакции. Когда блок создан сразу вычисляется его хэш. Изменения внутри блока изменят его хэш. Третий элемент - это хэш предыдущего блока, благодаря которому эффективно создается цепочка блоков и обеспечивается ее безопасность.</p>
                        <button className="button_next" onClick={setPage.bind(this, 3)}>Понятно</button>
                    </Page>
                )}
            </GlobalStateContext.Consumer>
        )
    };
}

export default Page2;