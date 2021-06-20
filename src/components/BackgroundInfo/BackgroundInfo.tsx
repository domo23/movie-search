import styles from './BackgroundInfo.module.css'

type Props = {
    msg: string
}

function BackgroundInfo({msg}: Props) {
    return (
        <div className={styles.main}>{msg}</div>
    )
}

export default BackgroundInfo;