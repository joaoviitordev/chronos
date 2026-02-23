import styles from './styles.module.css';

type ConatinerPaiProps = {
    children: React.ReactNode;
}

export function ContainerPai({children}: ConatinerPaiProps) {
    return (
        <div className={styles.ContainerPai}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}