import React, { useState } from 'react';
import { useSelector } from "react-redux";

import Page from "../../components/Page/index";
//import ButtonNextPage from "../../components/ButtonNextPage/index";
import Iframe from "../../components/Iframe";
//import styles from './styles.module.css';
import { russian_text, english_text } from './data';

function Page5() {
    const [urlClicker] = useState("https://zoxione.github.io/webgl-clicker");
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
            <Iframe title="clicker" source={urlClicker} />
        </Page>
    )
}

export default Page5;