import { useSelector } from "react-redux";

import Page from "../components/Page";
import ButtonNextPage from "../components/ButtonNextPage";

function Page0() {
    const language = useSelector(state => state.language);

    return (
        <Page>
            { language === "rus" &&
                <>
                    <h1 className="title">Что такое блокчейн?</h1>
                    <p>Длительность: 30 мин • CryptoAlliance 2021</p>
                    <ButtonNextPage>Начать</ButtonNextPage>
                </>
            }
            { language === "eng" &&
                <>
                    <h1 className="title">What is blockchain?</h1>
                    <p>Duration: 30 min • CryptoAlliance 2021</p>
                    <ButtonNextPage>Start</ButtonNextPage>
                </>
            }
        </Page>
        
        
    )
}

export default Page0;