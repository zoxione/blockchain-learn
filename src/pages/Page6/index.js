import React, { useState } from 'react';
import { useSelector } from "react-redux";

//import Page from "../../components/Page/index";
//import ButtonNextPage from "../../components/ButtonNextPage/index";
import Iframe from "../../components/Iframe";
import styles from './styles.module.css';
import { russian_text, english_text } from './data';
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Page5() {
    const [urlClicker] = useState("https://zoxione.github.io/webgl-clicker");
    const language = useSelector(state => state.language);
    const { width } = useWindowDimensions();

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

    if (width < 450) {
        return (
            <div className={styles.page}>
                <h2>{text.title}</h2>
                <p>*please flip your phone*</p>
            </div>
        )
    }
    else {
        return (
            <div className={styles.page}>
                <h2>{text.title}</h2>
                <Iframe title="clicker" source={urlClicker} />
            </div>
        )
    }
}

export default Page5;