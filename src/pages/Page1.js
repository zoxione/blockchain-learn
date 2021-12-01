import { useSelector } from "react-redux";

import Page from "../components/Page";
import ButtonNextPage from "../components/ButtonNextPage";

function Page1() {
    const language = useSelector(state => state.language);

    return (
        <Page>
            { language === "rus" &&
                <>
                    <h2>Блокчейн - это...</h2>
                    <p>Блокчейн – это распределенная база данных. Представляет собой цепочку записей (блоков), которые нельзя поменять.</p>
                    <img src={process.env.PUBLIC_URL + '/img/blockchain.jpg'} alt="blockchain" />
                    <ButtonNextPage>Понятно</ButtonNextPage>
                </>
            }
            { language === "eng" &&
                <>
                    <h2>Blockchain is...</h2>
                    <p>Blockchain is a distributed database. It is a chain of records (blocks) that cannot be changed.</p>
                    <img src={process.env.PUBLIC_URL + '/img/blockchain.jpg'} alt="blockchain" />
                    <ButtonNextPage>Clearly</ButtonNextPage>
                </>
            }
        </Page>
    )
}

export default Page1;