import { useDispatch, useSelector } from "react-redux";
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';
import useSound from 'use-sound';

import './Menu.css';

function Menu() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    const language = useSelector(state => state.language);
    const isSound = useSelector(state => state.sound);

    const [play, { pause }] = useSound(process.env.PUBLIC_URL + '/sound/background.mp3', { loop: true, volume: 0.25 });
    const [playSwitch] = useSound(process.env.PUBLIC_URL + '/sound/switch.mp3', { volume: 0.25 });
    const [playSelect] = useSound(process.env.PUBLIC_URL + '/sound/select.mp3', { volume: 0.25 });

    const setPage = (_page) => {
        dispatch({type: "SET_PAGE", payload: _page});
        playSelect();
    }

    const toggleLanguage = () => {
        dispatch({type: "TOGGLE_LANGUAGE"});
        playSwitch();
    }

    const toggleSound = () => {
        dispatch({type: "TOGGLE_SOUND"});
        playSwitch();
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
                        {language === "rus" && <p>ВКЛ</p>}
                        {language === "eng" && <p>ON</p>}
                    </div>
                }
                {isSound === false &&
                    <div className="sound_off">
                        <AiOutlineSound className="sound_icon" />
                        {language === "rus" && <p>ВЫКЛ</p>}
                        {language === "eng" && <p>OFF</p>}
                    </div>
                }
            </button>
            {page !== 0 &&
                <div className="pagination">
                    <button 
                        data-title = {language === "rus" ? "1. Блокчейн" : "1. Blockchain"}
                        className = {"pagination_item " + (page === 1 ? 'pagination_item_active' : '')} 
                        onClick={() => setPage(1)}
                    />
                    <button
                        data-title = {language === "rus" ? "2. Блок" : "2. Block"}
                        className={"pagination_item " + (page === 2 ? 'pagination_item_active' : '')}
                        onClick={() => setPage(2)}
                    />
                    <button
                        data-title = {language === "rus" ? "3. Безопасность" : "3. Security"}
                        className={"pagination_item " + (page === 3 ? 'pagination_item_active' : '')}
                        onClick={() => setPage(3)}
                    />
                    <button
                        data-title = {language === "rus" ? "4. Смарт-контракты" : "4. Smart-contracts"}
                        className={"pagination_item " + (page === 4 ? 'pagination_item_active' : '')}
                        onClick={() => setPage(4)}
                    />
                </div>
            }
            {page === 0 &&
                <button className="lang_button" onClick={() => toggleLanguage()}>
                    {language === "rus" && <p>ИЗМЕНИТЬ ЯЗЫК</p>}
                    {language === "eng" && <p>CHANGE LANGUAGE</p>}
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