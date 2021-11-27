import { useDispatch, useSelector } from "react-redux";

import Page from "../components/Page";

function Page0() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    
    const nextPage = (_page) => {
        dispatch({type: "SET_PAGE", payload: page + 1})
    }

    return (
        <Page>
            <h1>Что такое блокчейн?</h1>
            <p>Длительность: 30 мин • CryptoAlliance 2021</p>
            <button className="button_start" onClick={() => nextPage()}>Играть</button>
        </Page>
    )
}

export default Page0;