import { useSelector } from "react-redux";

import Page from "../components/Page";
import ButtonNextPage from "../components/ButtonNextPage";

function Page2() {
    const language = useSelector(state => state.language);

    return (
        <Page>
            { language === "rus" &&
                <>
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
                    <ButtonNextPage>Понятно</ButtonNextPage>
                </>
            }
            { language === "eng" &&
                <>
                    <h2>One block contains:</h2>
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <div className="tripleBlock">
                            <div className="tripleBlock_1" />
                            <div className="tripleBlock_2" />
                            <div className="tripleBlock_3" />
                        </div>
                        <div>
                            <p>• information</p>
                            <p>• unique hash</p>
                            <p>• previous block hash</p>
                        </div>
                    </div>
                    <p>The information can be anything, for example, the bitcoin blockchain stores information about the sender, the recipient and the amount of the transaction. When a block is created, its hash is immediately computed. Changes inside the block will change its hash. The third element is the hash of the previous block, which effectively creates the blockchain and secures it.</p>
                    <ButtonNextPage>Clearly</ButtonNextPage>
                </>
            }
        </Page>
    )
}

export default Page2;