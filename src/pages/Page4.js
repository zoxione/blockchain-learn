import React from "react";
import Page from "../components/Page";
import GlobalStateContext from '../components/global-state-context';

class Page4 extends React.Component {
    render() {
        return (
            <GlobalStateContext.Consumer>
                {({ page, setPage }) => (
                    <Page>
                        <h1>Смарт-контракты</h1>
                        <p>Смарт-контракты - это простые программы, которые хранятся в блокчейне и могут автоматически выполнятся при достижении определенных условий. Такая технология может использоваться не только в криптовалюте, но и в повседных вещах, например, для хранения и обработки персональных данных, в маркетинге и компьютерных играх. </p>
                        <button className="button_next" onClick={setPage.bind(this, 5)}>Понятно</button>
                    </Page>
                )}
            </GlobalStateContext.Consumer>
        )
    };
}

export default Page4;