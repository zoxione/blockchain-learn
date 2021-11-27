import { useDispatch, useSelector } from "react-redux";
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';
import useSound from 'use-sound';

import soundData from './background.mp3';

import './Menu.css';

function Menu() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    const language = useSelector(state => state.language);
    const isSound = useSelector(state => state.sound);

    const [play, { pause }] = useSound(soundData, { loop: true, volume: 0.25 });
    
    const setPage = (_page) => {
        dispatch({type: "SET_PAGE", payload: _page});
    }

    const toggleLanguage = () => {
        dispatch({type: "TOGGLE_LANGUAGE"});
    }

    const toggleSound = () => {
        dispatch({type: "TOGGLE_SOUND"});
        if (!isSound) {
            play();
        }
        else {
            pause();
        }     
    }

    return (
        <nav className="menu">
            <button className="sound_button" onClick={() => toggleSound()}>
                {isSound === true &&
                    <div className="sound_on">
                        <AiFillSound className="sound_icon" />
                        <p>ВКЛ</p>
                    </div>
                }
                {isSound === false &&
                    <div className="sound_off">
                        <AiOutlineSound className="sound_icon" />
                        <p>ВЫКЛ</p>
                    </div>
                }
            </button>
            {page !== 0 &&
                <div className="pagination">
                    <button onClick={() => setPage(1)}>
                        <div className={"pagination_item " + (page === 1 ? 'pagination_item_active' : '')} />
                    </button>
                    <button onClick={() => setPage(2)}>
                        <div className={"pagination_item " + (page === 2 ? 'pagination_item_active' : '')} />
                    </button>
                    <button onClick={() => setPage(3)}>
                        <div className={"pagination_item " + (page === 3 ? 'pagination_item_active' : '')} />
                    </button>
                    <button onClick={() => setPage(4)}>
                        <div className={"pagination_item " + (page === 4 ? 'pagination_item_active' : '')} />
                    </button>
                </div>
            }
            {page === 0 &&
                <button className="lang_button" onClick={() => toggleLanguage()}>
                    <p>ИЗМЕНИТЬ ЯЗЫК</p>
                    {language === "rus" &&
                        <img className="lang_icon" alt="rus" src="https://img.icons8.com/fluency/40/000000/russian-federation-circular.png" />
                    }
                    {language === "eng" &&
                        <img className="lang_icon" alt="eng" src="https://img.icons8.com/fluency/40/000000/great-britain-circular.png" />
                    }
                </button>
            }
        </nav>
    )
}

export default Menu;