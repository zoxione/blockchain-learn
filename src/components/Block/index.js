import styles from './styles.module.css';

function Block(props) {
    return (
        <div className={styles.block}>
            {props.children}
        </div>
    )
}

export default Block;