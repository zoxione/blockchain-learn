import React from "react";
import './Menu.css';
import GlobalStateContext from './global-state-context';

import { AiFillSound, AiOutlineSound } from 'react-icons/ai';

class Menu extends React.Component {
    static contextType = GlobalStateContext;

    render() {
        return (
            <nav className="menu">
                <GlobalStateContext.Consumer>
                    {({ isSound, toggleSound }) => (
                        <button className="sound_button" onClick={toggleSound}>
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
                    )}
                </GlobalStateContext.Consumer>
                {this.context.page !== 0 &&
                    <GlobalStateContext.Consumer>
                        {({ page, setPage }) => (
                            <div className="pagination">
                                <button onClick={setPage.bind(this, 1)}>
                                    <div className={"pagination_item " + (page === 1 ? 'pagination_item_active' : '')} />
                                </button>
                                <button onClick={setPage.bind(this, 2)}>
                                    <div className={"pagination_item " + (page === 2 ? 'pagination_item_active' : '')} />
                                </button>
                                <button onClick={setPage.bind(this, 3)}>
                                    <div className={"pagination_item " + (page === 3 ? 'pagination_item_active' : '')} />
                                </button>
                                <button onClick={setPage.bind(this, 4)}>
                                    <div className={"pagination_item " + (page === 4 ? 'pagination_item_active' : '')} />
                                </button>
                            </div>
                        )}
                    </GlobalStateContext.Consumer>
                }
                {this.context.page === 0 &&
                    <GlobalStateContext.Consumer>
                        {({ language, toggleLanguage }) => (
                            <button className="lang_button" onClick={toggleLanguage}>
                                <p>ИЗМЕНИТЬ ЯЗЫК</p>
                                {language === "rus" &&
                                    <img className="lang_icon" alt="rus" src="https://img.icons8.com/fluency/40/000000/russian-federation-circular.png" />
                                }
                                {language === "eng" &&
                                    <img className="lang_icon" alt="eng" src="https://img.icons8.com/fluency/40/000000/great-britain-circular.png" />
                                }
                            </button>
                        )}
                    </GlobalStateContext.Consumer>
                }
            </nav>
        )
    };
}

export default Menu;