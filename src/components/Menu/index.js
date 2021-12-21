import { useDispatch, useSelector } from "react-redux";
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';
import useSound from 'use-sound';

import styles from './styles.module.css';

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
        <nav className={styles.menu}>
            <button className={styles.sound_button} onClick={() => toggleSound()}>
                {isSound === true &&
                    <div className={styles.sound_on}>
                        <AiFillSound className={styles.sound_icon} />
                        {language === "rus" && <p>ВКЛ</p>}
                        {language === "eng" && <p>ON</p>}
                    </div>
                }
                {isSound === false &&
                    <div className={styles.sound_off}>
                        <AiOutlineSound className={styles.sound_icon} />
                        {language === "rus" && <p>ВЫКЛ</p>}
                        {language === "eng" && <p>OFF</p>}
                    </div>
                }
            </button>
            {page !== 0 &&
                <div className={styles.pagination}>
                    <button 
                        data-title = {language === "rus" ? "1. Блокчейн" : "1. Blockchain"}
                        className={styles.pagination_item + ' ' + (page === 1 ? styles.pagination_item_active : '')}
                        onClick={() => setPage(1)}
                    />
                    <button
                        data-title = {language === "rus" ? "2. Блок" : "2. Block"}
                        className={styles.pagination_item + ' ' + (page === 2 ? styles.pagination_item_active : '')}
                        onClick={() => setPage(2)}
                    />
                    <button
                        data-title = {language === "rus" ? "3. Безопасность" : "3. Security"}
                        className={styles.pagination_item + ' ' + (page === 3 ? styles.pagination_item_active : '')}
                        onClick={() => setPage(3)}
                    />
                    <button
                        data-title = {language === "rus" ? "4. Смарт-контракты" : "4. Smart-contracts"}
                        className={styles.pagination_item + ' ' + (page === 4 ? styles.pagination_item_active : '')}
                        onClick={() => setPage(4)}
                    />
                    <button
                        data-title = {language === "rus" ? "5. Майнинг" : "5. Mining"}
                        className={styles.pagination_item + ' ' + (page === 5 ? styles.pagination_item_active : '')}
                        onClick={() => setPage(5)}
                    />
                </div>
            }
            {page === 0 &&
                <button className={styles.lang_button} onClick={() => toggleLanguage()}>
                    {language === "rus" && <p>ИЗМЕНИТЬ ЯЗЫК</p>}
                    {language === "eng" && <p>CHANGE LANGUAGE</p>}
                    {language === "rus" &&
                        <img className={styles.lang_icon} alt="rus" src="https://img.icons8.com/fluency/40/000000/russian-federation-circular.png" />
                    }
                    {language === "eng" &&
                        <img className={styles.lang_icon} alt="eng" src="https://img.icons8.com/fluency/40/000000/great-britain-circular.png" />
                    }
                </button>
            }
        </nav>
    )
}

export default Menu;