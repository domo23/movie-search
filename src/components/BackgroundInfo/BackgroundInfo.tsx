import styles from './BackgroundInfo.module.css'

export type Props = {
    msg: string
}

function BackgroundInfo({msg}: Props) {
    return (
        <div className={styles.main} data-testid="background-info">{msg}</div>
    )
}

export default BackgroundInfo;