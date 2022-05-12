import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Button } from '@mantine/core';
import { VscDebugRestart } from "react-icons/vsc"

import Page from "../../components/Page/index";
import styles from './styles.module.css';
import { russian_text, english_text } from './data';

function QuestionAnswer(props) {
    return (
        <form>
            <p>{props.question}</p>
            <div className={styles.answers} id="ans_wrapper">
                <div className={styles.answer} id="answer">
                    <input type="radio" name="answer_input" value={props.true === 1 ? "true" : "false"} className={styles.radio}></input>
                    <span>{props.answer1}</span>
                </div>
                <div className={styles.answer} id="answer">
                    <input type="radio" name="answer_input" value={props.true === 2 ? "true" : "false"} className={styles.radio}></input>
                    <span>{props.answer2}</span>
                </div>
                <div className={styles.answer} id="answer">
                    <input type="radio" name="answer_input" value={props.true === 3 ? "true" : "false"} className={styles.radio}></input>
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

    const [countTrue, setCountTrue] = useState(0);
    const [isTestCompleted, setIsTestCompleted] = useState(false);

    const isValid = () => {
        let answerWrapperList = document.querySelectorAll('#ans_wrapper');
        let isValid = true;

        answerWrapperList.forEach(item => {
            let answerList = item.childNodes;
            let isChecked = false;

            for (let i = 0; i < answerList.length; i++) {
                let radio = answerList[i].firstChild;
                if (radio.checked) {
                    isChecked = true;
                    break;
                }
            }

            if (isChecked === false) {
                isValid = false;
            }
        });

        return isValid;
    }

    const checkResult = () => {
        if (isValid()) {
            let radios = document.querySelectorAll('input');
            let answerList = document.querySelectorAll('#answer');
            let count = 0, index = 0;

            radios.forEach(item => {
                if (item.checked && item.value === "true") {
                    count++;
                    item.style.background = 'green';
                    answerList[index].style.color = 'green';
                }
                else if (item.checked && item.value === "false") {
                    item.style.background = 'red';
                    answerList[index].style.color = 'red';
                }

                item.disabled = true;
                item.checked = false;
                index++;
            });

            setCountTrue(count);
            setIsTestCompleted(true);
        }
    }

    const againTest = () => {
        setCountTrue(0);
        setIsTestCompleted(false);

        let radios = document.querySelectorAll('input');
        radios.forEach(item => {
            item.disabled = false;
            item.style.background = '#fff';
        });
        let answerList = document.querySelectorAll('#answer');
        answerList.forEach(item => {
            item.style.color = '#393E46'
        });
    }

    return (
        <Page>
            <h2>{text.title}</h2>
            <div>
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
                {isTestCompleted
                    ? <div className={styles.block_result}>
                        <p>{text.result}: {countTrue}</p>
                        <Button className={styles.btn_again} onClick={() => againTest()} variant="subtle">
                            <VscDebugRestart size={35} />
                        </Button>
                    </div>
                    : <button onClick={() => checkResult()} className={styles.btn_check}>{text.button_result}</button>
                }
            </div>
        </Page >
    )
}

export default Page9;