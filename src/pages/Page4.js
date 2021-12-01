import { useSelector } from "react-redux";

import Page from "../components/Page";
import ButtonNextPage from "../components/ButtonNextPage";

function Page4() {
    const language = useSelector(state => state.language);

    return (
        <Page>
            { language === "rus" &&
                <>
                    <h2>Смарт-контракты</h2>
                    <p>Смарт-контракты - это простые программы, которые хранятся в блокчейне и могут автоматически выполнятся при достижении определенных условий. Такая технология может использоваться не только в криптовалюте, но и в повседных вещах, например, для хранения и обработки персональных данных, в маркетинге и компьютерных играх.</p>
                    <ButtonNextPage>Понятно</ButtonNextPage>
                </>
            }
            { language === "eng" &&
                <>
                    <h2>Smart-contracts</h2>
                    <p>Smart contracts are simple programs that are stored in a blockchain and can be automatically executed when certain conditions are met. This technology can be used not only in cryptocurrency, but also in everyday things, such as storing and processing personal data, in marketing, and in computer games.</p>
                    <ButtonNextPage>Clearly</ButtonNextPage>
                </>
            }
        </Page>
    )
}

export default Page4;