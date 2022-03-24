import { useSelector } from "react-redux";

import Page from "../../components/Page/index";
import ButtonNextPage from "../../components/ButtonNextPage/index";
import styles from './styles.module.css';
import { russian_text, english_text } from './data';

function Page3() {
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
            {text.description.map((description, i) => {
                if ((i + 1) === text.description.length) {
                    return (
                        <></>
                    )
                }
                else {
                    return (
                        <p>{text.description[i]}</p>
                    )
                }
            })}
            <img className={styles.img} src={`${process.env.PUBLIC_URL}/img/mining.jpg`} alt="mining" />
            <p>{text.description[text.description.length - 1]}</p>
            <ButtonNextPage>{text.button}</ButtonNextPage>
        </Page>
    )

}

export default Page3;