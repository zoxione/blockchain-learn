import React from 'react';

import styles from './styles.module.css';

function Iframe(props) {
    if (!props.source) {
        return <div>Loading...</div>;
    }

    return (
        <iframe className={styles.iframe} title={props.title} src={props.source} >
            <p>Your browser is out of date for displaying the iframe element.</p>
        </iframe>
    );
};

export default Iframe;