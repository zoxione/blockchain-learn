import React from 'react';
import { useSelector } from "react-redux";

import Page from "../../components/Page/index";
import ButtonNextPage from "../../components/ButtonNextPage/index";
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

function Page6() {
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
                        question="1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet. Phasellus sed dapibus erat. Sed condimentum purus vel eleifend volutpat. Donec quis venenatis metus, maximus rhoncus erat."
                        answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                        answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                        answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                        true={1}
                    />
                    <QuestionAnswer
                        question="1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet. Phasellus sed dapibus erat. Sed condimentum purus vel eleifend volutpat. Donec quis venenatis metus, maximus rhoncus erat."
                        answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                        answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                        answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                        true={3}
                    />
                    <QuestionAnswer
                        question="1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet. Phasellus sed dapibus erat. Sed condimentum purus vel eleifend volutpat. Donec quis venenatis metus, maximus rhoncus erat."
                        answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                        answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                        answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                        true={1}
                    />
                    <button onClick={() => checkResult()} className={styles.btn_check}>Проверить результат</button>
                </div>
                : <div>
                    <p>Результат теста: {countTrue} верных</p>
                    <div className={styles.block_result}>
                        <button onClick={() => againTest()} className={styles.btn_again}>Начать заново</button>
                        <ButtonNextPage>{text.button}</ButtonNextPage>
                    </div>
                </div>
            }
        </Page>
    )
}

export default Page6;