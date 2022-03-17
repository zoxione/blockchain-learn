import React from 'react';
import { useSelector } from "react-redux";

import Page from "../../components/Page/index";
//import styles from './styles.module.css';
import { russian_text, english_text } from './data';

function Page9() {
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
            <p>
                <img src={`${process.env.PUBLIC_URL}/img/anime-tyan.gif`} alt="anime-tyan"></img>
            </p>
        </Page>
    )
}

export default Page9;