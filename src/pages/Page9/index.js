import React from 'react';
import { useSelector } from "react-redux";
import { Button } from '@mantine/core';
import { VscDebugRestart } from "react-icons/vsc"

import Page from "../../components/Page/index";
import styles from './styles.module.css';
import { russian_text, english_text } from './data';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function QuestionAnswer(props) {
    return (
        <form>
            <p>{props.question}</p>
            <div className={styles.answers}>
                <div className={styles.answer}>
                    <input type="radio" name="answer" value={props.true === 1 ? "true" : "false"} className={styles.radio}></input>
                    <span>{props.answer1}</span>
                </div>
                <div className={styles.answer}>
                    <input type="radio" name="answer" value={props.true === 2 ? "true" : "false"} className={styles.radio}></input>
                    <span>{props.answer2}</span>
                </div>
                <div className={styles.answer}>
                    <input type="radio" name="answer" value={props.true === 3 ? "true" : "false"} className={styles.radio}></input>
                    <span>{props.answer3}</span>
                </div>
            </div>
        </form>
    )
}

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

    const [countTrue, setCountTrue] = useLocalStorage("countTrue", 0);
    const [isTestCompleted, setIsTestCompleted] = useLocalStorage("isTestCompleted", false);

    const checkResult = () => {
        let radios = document.querySelectorAll('input');
        console.log(radios);
        let count = 0;
        radios.forEach(item => {
            if (item.checked && item.value === "true") {
                count++;
            }
        });
        setCountTrue(count);
        setIsTestCompleted(true);
    }

    const againTest = () => {
        setCountTrue(0);
        setIsTestCompleted(false);
    }

    return (
        <Page>
            <h2>{text.title}</h2>
            {!isTestCompleted
                ? <div>
                    <QuestionAnswer
                        question={'1. ' + text.questionAnswers[0].question}
                        answer1={text.questionAnswers[0].answers[0]}
                        answer2={text.questionAnswers[0].answers[1]}
                        answer3={text.questionAnswers[0].answers[2]}
                        true={2}
                    />
                    <QuestionAnswer
                        question={'2. ' + text.questionAnswers[1].question}
                        answer1={text.questionAnswers[1].answers[0]}
                        answer2={text.questionAnswers[1].answers[1]}
                        answer3={text.questionAnswers[1].answers[2]}
                        true={3}
                    />
                    <QuestionAnswer
                        question={'3. ' + text.questionAnswers[2].question}
                        answer1={text.questionAnswers[2].answers[0]}
                        answer2={text.questionAnswers[2].answers[1]}
                        answer3={text.questionAnswers[2].answers[2]}
                        true={1}
                    />
                    <button onClick={() => checkResult()} className={styles.btn_check}>Проверить результат</button>
                </div>
                : <div className={styles.block_result}>
                    <p>Результат теста: {countTrue} верных</p>
                    <Button className={styles.btn_again} onClick={() => againTest()} variant="subtle">
                        <VscDebugRestart size={35} />
                    </Button>
                </div>
            }
        </Page >
    )
}

export default Page9;