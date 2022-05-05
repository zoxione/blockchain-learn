import styles from './styles.module.css';

function Page(props) {
    return (
        <div id="page" className={styles.page}>
            {props.children}
        </div>
    )
}

export default Page;