import { useSelector } from "react-redux";
import { Canvas, Node } from 'reaflow';

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
            <div className = {styles.main}>
                <div className = {styles.blockchain}>
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
                <div>
                    <p>• {text.list[0]}</p>
                    <p>• {text.list[1]}</p>
                    <p>• {text.list[2]}</p>
                </div>
            </div>
            <p>{text.description[0]}</p>
            <ButtonNextPage>{text.button}</ButtonNextPage>
        </Page>
    )
}

export default Page2;