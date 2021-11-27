import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Page from "../components/Page";

function Page3() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    
    const nextPage = (_page) => {
        dispatch({type: "SET_PAGE", payload: page + 1})
    }

    return (
        <Page>
            <h2>Безопасность блокчейна</h2>
            <p>Если злоумышленик сможет подделать хэш одного блока, то все последующие блоки будут недействительными. Так злоумышленик может подделать все остальные блоки в сети, но чтобы избежать этого в блокчейне используется механизм Proof of Work, который замедляет создание новых блоков.</p>
            <p>Помимо этого, блокчейн - это децентрализованная сеть, поэтому каждый участник сети проверяет валидность нового блока. Если более 50% участников согласны с тем, что новый блок не является подделаным, то он добавляется в сеть.</p>
            <button className="button_next" onClick={() => nextPage()}>Понятно</button>
        </Page>
    )

}

export default Page3;