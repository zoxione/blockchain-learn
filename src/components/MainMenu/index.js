import { useDispatch, useSelector } from "react-redux";
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';
import useSound from 'use-sound';
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Menu } from '@mantine/core';

import styles from './styles.module.css';

function ButtonPage(props) {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    const language = useSelector(state => state.language);

    const [playSelect] = useSound(process.env.PUBLIC_URL + '/sound/select.mp3', { volume: 0.25 });

    const setPage = (_page) => {
        dispatch({ type: "SET_PAGE", payload: _page });
        playSelect();
    }

    return (
        <button
            data-title={language === "rus" ? props.titleRU : props.titleENG}
            className={styles.pagination_item + ' ' + (page === props.page ? styles.pagination_item_active : '')}
            onClick={() => setPage(props.page)}
        />
    )
}

function MainMenu() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    const language = useSelector(state => state.language);
    const isSound = useSelector(state => state.sound);
    const { width } = useWindowDimensions();

    const [play, { pause }] = useSound(process.env.PUBLIC_URL + '/sound/background.mp3', { loop: true, volume: 0.25 });
    const [playSwitch] = useSound(process.env.PUBLIC_URL + '/sound/switch.mp3', { volume: 0.25 });
    const [playSelect] = useSound(process.env.PUBLIC_URL + '/sound/select.mp3', { volume: 0.25 });

    const pages = [
        { id: 1, titleRU: "1. Блокчейн", titleENG: "1. Blockchain" },
        { id: 2, titleRU: "2. Блок", titleENG: "2. Block" },
        { id: 3, titleRU: "3. Безопасность", titleENG: "3. Security" },
        { id: 4, titleRU: "4. Смарт-контракты", titleENG: "4. Smart-contracts" },
        { id: 5, titleRU: "5. Проверка знаний", titleENG: "5. Knowledge check" },
        { id: 6, titleRU: "6. Майнинг", titleENG: "6. Mining" },
        { id: 9, titleRU: "9. Заключение", titleENG: "9. Conclusion" },
    ];

    const toggleLanguage = () => {
        dispatch({ type: "TOGGLE_LANGUAGE" });
        playSwitch();
    }

    const toggleSound = () => {
        dispatch({ type: "TOGGLE_SOUND" });
        playSwitch();
        if (!isSound) {
            play();
        }
        else {
            pause();
        }
    }

    const setPage = (_page) => {
        dispatch({ type: "SET_PAGE", payload: _page });
        playSelect();
    }

    if (width < 640) {
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
                    <Menu trigger="hover" delay={100} className={styles.min_menu}>
                        <Menu.Label align="left">Menu</Menu.Label>
                        {pages.map((page, i) => {
                            return (
                                <Menu.Item onClick={() => setPage(page.id)}>
                                    {language === "rus" && page.titleRU}
                                    {language === "eng" && page.titleENG}
                                </Menu.Item>
                            )
                        })}
                    </Menu>
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
    else {
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
                        {pages.map((page, i) => {
                            return (
                                <ButtonPage page={page.id} titleRU={page.titleRU} titleENG={page.titleENG} />
                            )
                        })}
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
}

export default MainMenu;