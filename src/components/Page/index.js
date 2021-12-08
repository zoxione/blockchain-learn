import styles from './styles.module.css';

function Page(props) {
    return (
        <div className={styles.page}>
            {props.children}
        </div>
    )
}

export default Page;