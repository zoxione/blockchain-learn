import { useDispatch, useSelector } from "react-redux";

import Page from "../components/Page";

function Page0() {
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
                    <h1 className="title">Что такое блокчейн?</h1>
                    <p>Длительность: 30 мин • CryptoAlliance 2021</p>
                    <button className="button_next" onClick={() => nextPage()}>Начать</button>
                </>
            }
            { language === "eng" &&
                <>
                    <h1 className="title">What is blockchain?</h1>
                    <p>Duration: 30 min • CryptoAlliance 2021</p>
                    <button className="button_next" onClick={() => nextPage()}>Start</button>
                </>
            }
        </Page>
        
        
    )
}

export default Page0;