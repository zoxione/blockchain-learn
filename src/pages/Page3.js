import React from "react";
import Page from "../components/Page";
import GlobalStateContext from '../components/global-state-context';

class Page3 extends React.Component {
    render() {
        return (
            <GlobalStateContext.Consumer>
                {({ page, setPage }) => (
                    <Page>
                        <h1>Безопасность блокчейна</h1>
                        <p>Если злоумышленик сможет подделать хэш одного блока, то все последующие блоки будут недействительными. Так злоумышленик может подделать все остальные блоки в сети, но чтобы избежать этого в блокчейне используется механизм Proof of Work, который замедляет создание новых блоков.</p>
                        <p>Помимо этого, блокчейн - это децентрализованная сеть, поэтому каждый участник сети проверяет валидность нового блока. Если более 50% участников согласны с тем, что новый блок не является подделаным, то он добавляется в сеть.</p>
                        <button className="button_next" onClick={setPage.bind(this, 4)}>Понятно</button>
                    </Page>
                )}
            </GlobalStateContext.Consumer>
        )
    };
}

export default Page3;