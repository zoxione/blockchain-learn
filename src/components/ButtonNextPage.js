import { useDispatch, useSelector } from "react-redux";
import useSound from 'use-sound';

import './ButtonNextPage.css';

function ButtonNextPage(props) {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);

    const soundUrl = process.env.PUBLIC_URL + '/sound/click.mp3';
    const [play] = useSound(soundUrl, { volume: 0.25 });
    
    const nextPage = (_page) => {
        dispatch({type: "SET_PAGE", payload: page + 1});
        play();
    }

    return (
        <button className="button_next" onClick={() => nextPage()}>{props.children}</button>
    )
}

export default ButtonNextPage;