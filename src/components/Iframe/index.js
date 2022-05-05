import React from 'react';

import styles from './styles.module.css';

function Iframe(props) {
    if (!props.source) {
        return <div>Loading...</div>;
    }
    else {
        return (
            <div className={styles.wrapper}>
                <iframe className={styles.iframe} title={props.title} src={props.source} seamless scrolling="no">
                    <p>Your browser is out of date for displaying the iframe element.</p>
                </iframe>
            </div>
        );
    }
};

export default Iframe;