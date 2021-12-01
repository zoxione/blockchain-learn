import { useSelector } from "react-redux";

import Page from "../components/Page";
import ButtonNextPage from "../components/ButtonNextPage";

function Page3() {
    const language = useSelector(state => state.language);

    return (
        <Page>
            { language === "rus" &&
                <>
                    <h2>Безопасность блокчейна</h2>
                    <p>Если злоумышленик сможет подделать хэш одного блока, то все последующие блоки будут недействительными. Так злоумышленик может подделать все остальные блоки в сети, но чтобы избежать этого в блокчейне используется механизм Proof of Work, который замедляет создание новых блоков.</p>
                    <p>Помимо этого, блокчейн - это децентрализованная сеть, поэтому каждый участник сети проверяет валидность нового блока. Если более 50% участников согласны с тем, что новый блок не является подделаным, то он добавляется в сеть.</p>
                    <ButtonNextPage>Понятно</ButtonNextPage>
                </>
            }
            { language === "eng" &&
                <>
                    <h2>Blockchain security</h2>
                    <p>If an attacker can forge the hash of one block, all subsequent blocks will be invalid. This way, an attacker can forge all other blocks in the network, but to avoid this, the blockchain uses the Proof of Work mechanism, which slows down the creation of new blocks.</p>
                    <p>In addition, blockchain is a decentralized network, so each participant checks the validity of a new block. If more than 50% of the participants agree that the new block is not tampered with, it is added to the network.</p>
                    <ButtonNextPage>Clearly</ButtonNextPage>
                </>
            }
        </Page>
    )

}

export default Page3;