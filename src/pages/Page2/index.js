import { useSelector } from "react-redux";
import { Canvas, Node } from 'reaflow';
import { Tooltip } from '@mantine/core';

import Page from "../../components/Page/index";
import ButtonNextPage from "../../components/ButtonNextPage/index";
import styles from './styles.module.css';
import { russian_text, english_text } from './data';

function Page2() {
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
            <div className={styles.main}>
                <Tooltip
                    wrapLines
                    width={220}
                    withArrow
                    transition="fade"
                    transitionDuration={200}
                    label="a3890eb2469875f2acd0075b57f04478026a56478b0e62523d63e4102a41c6d5"
                >
                    <div className={styles.blockchain}>
                        <Canvas
                            pannable={false}
                            readonly={true}
                            direction="RIGHT"
                            nodes={[
                                { id: '1', text: 'Block', width: 90, height: 90 }
                            ]}
                            node={(node: NodeProps) => (
                                <Node
                                    {...node}
                                    style={{
                                        fill: '#5c02d3'
                                    }}
                                />
                            )}
                        />
                    </div>
                </Tooltip>
                <div>
                    <p>• {text.list[0]}</p>
                    <p>• {text.list[1]}</p>
                    <p>• {text.list[2]}</p>
                </div>
            </div>
            {text.description.map((description, i) => {
                return (
                    <p>{text.description[i]}</p>
                )
            })}
            <ButtonNextPage>{text.button}</ButtonNextPage>
        </Page>
    )
}

export default Page2;