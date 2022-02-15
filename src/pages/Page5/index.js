import React from 'react';
import { useSelector } from "react-redux";

import Page from "../../components/Page/index";
import ButtonNextPage from "../../components/ButtonNextPage/index";
import styles from './styles.module.css';
import { russian_text, english_text } from './data';

function QuestionAnswer(props) {
    return (
        <form>
            <p>{props.question}</p>
            <div className={styles.answers}>
                <div className={styles.answer}>
                    <input type="radio" name="answer" className={styles.radio}></input>
                    <span>{props.answer1}</span>
                </div>
                <div className={styles.answer}>
                    <input type="radio" name="answer" className={styles.radio}></input>
                    <span>{props.answer2}</span>
                </div>
                <div className={styles.answer}>
                    <input type="radio" name="answer" className={styles.radio}></input>
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

    return (
        <Page>
            <h2>{text.title}</h2>
            <div>
                <QuestionAnswer
                    question="1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet. Phasellus sed dapibus erat. Sed condimentum purus vel eleifend volutpat. Donec quis venenatis metus, maximus rhoncus erat."
                    answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                />
                <QuestionAnswer
                    question="1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet. Phasellus sed dapibus erat. Sed condimentum purus vel eleifend volutpat. Donec quis venenatis metus, maximus rhoncus erat."
                    answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                />
                <QuestionAnswer
                    question="1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet. Phasellus sed dapibus erat. Sed condimentum purus vel eleifend volutpat. Donec quis venenatis metus, maximus rhoncus erat."
                    answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                />
                <QuestionAnswer
                    question="1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet. Phasellus sed dapibus erat. Sed condimentum purus vel eleifend volutpat. Donec quis venenatis metus, maximus rhoncus erat."
                    answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                />
                <QuestionAnswer
                    question="1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet. Phasellus sed dapibus erat. Sed condimentum purus vel eleifend volutpat. Donec quis venenatis metus, maximus rhoncus erat."
                    answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                />
                <QuestionAnswer
                    question="1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet. Phasellus sed dapibus erat. Sed condimentum purus vel eleifend volutpat. Donec quis venenatis metus, maximus rhoncus erat."
                    answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                />
                <QuestionAnswer
                    question="1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet. Phasellus sed dapibus erat. Sed condimentum purus vel eleifend volutpat. Donec quis venenatis metus, maximus rhoncus erat."
                    answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                />
                <QuestionAnswer
                    question="1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet. Phasellus sed dapibus erat. Sed condimentum purus vel eleifend volutpat. Donec quis venenatis metus, maximus rhoncus erat."
                    answer1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                    answer3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra luctus nunc sed aliquet."
                />

                <ButtonNextPage>{text.button}</ButtonNextPage>
            </div>
        </Page>
    )
}

export default Page6;