import styles from './styles.module.css';

export function Ciclos() {
    return (
        <div className={styles.cicloContainer}>
            <span>Ciclos:</span>

            <div className={styles.cicloPontos}>
                <span className={`${styles.cicloPonto} ${styles.workTime}`}></span>
                <span className={`${styles.cicloPonto} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cicloPonto} ${styles.workTime}`}></span>
                <span className={`${styles.cicloPonto} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cicloPonto} ${styles.workTime}`}></span>
                <span className={`${styles.cicloPonto} ${styles.shortBreakTime}`}></span>
                <span className={`${styles.cicloPonto} ${styles.workTime}`}></span>
                <span className={`${styles.cicloPonto} ${styles.longBreakTime}`}></span>
            </div>
        </div>
    );
}

// Para adicionar duas classes ou +, basta concatenar