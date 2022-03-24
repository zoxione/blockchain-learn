import { useSelector } from "react-redux";
import { Code, ScrollArea } from '@mantine/core';

import Page from "../../components/Page/index";
import ButtonNextPage from "../../components/ButtonNextPage/index";
//import styles from './styles.module.css';
import { russian_text, english_text } from './data';
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Page4() {
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

    const codeForPreviousDemo = `pragma solidity ^0.4.22;
contract helloWorld {
    function renderHelloWorld () public pure returns (string) {
        return 'helloWorld';
    }
}`;

    return (
        <Page>
            <h2>{text.title}</h2>
            <p>{text.description[0]}</p>
            <ScrollArea>
                <div style={{ width: width }}>
                    <Code color="indigo" style={{ textAlign: 'start', marginBottom: '30px' }} block>
                        {codeForPreviousDemo}
                    </Code>
                </div>
            </ScrollArea>
            <h2>{text.description[1]}</h2>
            {text.description.map((description, i) => {
                if (i > 1) {
                    return (
                        <p>{text.description[i]}</p>
                    )
                }
                else {
                    return (
                        <></>
                    )
                }
            })}
            <ButtonNextPage>{text.button}</ButtonNextPage>
        </Page>
    )
}

export default Page4;