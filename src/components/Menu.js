import React from "react";
import './Menu.css';

import { AiFillSound, AiOutlineSound } from 'react-icons/ai';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sound: true, lang: "ru"};
        this.switchSound = this.switchSound.bind(this);
        this.switchLanguage = this.switchLanguage.bind(this);
    };

    switchSound() {
        let _sound = (this.state.sound === true) ? false : true;
        this.setState({sound: _sound});
        console.log(this.state.sound);
    }

    switchLanguage() {
        let _lang = (this.state.lang === "ru") ? "eng" : "ru";
        this.setState({lang: _lang});
        console.log(this.state.lang);
    }

    render() {
        return (
            <nav className="menu">
                <div className="menu_content">
                    <button className="sound_button" onClick={this.switchSound}>
                        { this.state.sound &&
                            <div className="sound_on">
                                <AiFillSound className="sound_icon" />
                                <p>ВКЛ</p>
                            </div>
                            
                        }
                        { !this.state.sound &&
                            <div className="sound_off">
                                <AiOutlineSound className="sound_icon" />
                                <p>ВЫКЛ</p>
                            </div>
                        }
                    </button>
                    <button className="lang_button" onClick={this.switchLanguage}>
                        <p>ИЗМЕНИТЬ ЯЗЫК https://icons8.com/license</p>
                        { this.state.lang === "ru" && 
                            <img className="lang_icon" src="https://img.icons8.com/fluency/40/000000/russian-federation-circular.png"/>
                        }
                        { this.state.lang === "eng" && 
                            <img className="lang_icon" src="https://img.icons8.com/fluency/40/000000/great-britain-circular.png"/>
                        }
                    </button>
                </div>
            </nav>
        )
    };
}

export default Menu;