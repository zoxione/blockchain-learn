import { useSelector } from "react-redux";
import { Canvas, Node } from 'reaflow';
import { useState } from 'react';
import { Button, Collapse } from '@mantine/core';
import { AiOutlineQuestionCircle } from 'react-icons/ai'

import styles from './styles.module.css';
import Page from "../../components/Page/index";
import ButtonNextPage from "../../components/ButtonNextPage/index";
import { russian_text, english_text } from './data';
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Page1() {
    const language = useSelector(state => state.language);
    const { width } = useWindowDimensions();

    const [opened, setOpen] = useState(false);

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
            <p>{text.description[0]}</p>
            <div className={styles.blockchain}>
                {width > 768
                    ? <Canvas
                        pannable={false}
                        readonly={true}
                        direction="RIGHT"
                        nodes={[
                            { id: '1', text: 'Block 1' },
                            { id: '2', text: 'Block 2' },
                            { id: '3', text: 'Block 3' }
                        ]}
                        edges={[
                            { id: '1-2', from: '1', to: '2' },
                            { id: '2-3', from: '2', to: '3' }
                        ]}
                        node={(node: NodeProps) => (
                            <Node
                                {...node}
                                style={{
                                    fill: node.properties.id === '1' ? '#2563EB' : node.properties.id === '2' ? '#059669' : '#DC2626'
                                }}
                            />
                        )}
                    />
                    : <Canvas
                        pannable={false}
                        readonly={true}
                        direction="RIGHT"
                        nodes={[
                            { id: '1', text: 'Block 1' },
                            { id: '2', text: 'Block 2' },
                        ]}
                        edges={[
                            { id: '1-2', from: '1', to: '2' },
                        ]}
                        node={(node: NodeProps) => (
                            <Node
                                {...node}
                                style={{
                                    fill: node.properties.id === '1' ? '#2563EB' : node.properties.id === '2' ? '#059669' : '#DC2626'
                                }}
                            />
                        )}
                    />
                }
            </div>

            <Button className={styles.btn_question} variant="subtle" onClick={() => setOpen((o) => !o)}>
                <AiOutlineQuestionCircle size={40} />
            </Button>
            <Collapse in={opened} style={{ fontSize: '18px' }}>
                {text.description[2]}
            </Collapse>

            <p>{text.description[1]}</p>

            <ButtonNextPage>{text.button}</ButtonNextPage>
        </Page>
    )
}

export default Page1;