import { useSelector } from "react-redux";

import Page from "../../components/Page/index";
import ButtonNextPage from "../../components/ButtonNextPage/index";
//import styles from './styles.module.css';
import { russian_text, english_text } from './data';

function Page4() {
    const language = useSelector(state => state.language);

    var text;
    switch (language) {
        case "rus":
            text = russian_text;
            break;
        case "eng":
            text = english_text;
            break;
        default:
            text = russian_text;
            break;
    }

    return (
        <Page>
            <h2>{text.title}</h2>
            <p>{text.description[0]}</p>
            <ButtonNextPage>{text.button}</ButtonNextPage>
        </Page>
    )
}

export default Page4;