import styles from './Heading.module.css';

export function Heading(props) {
    console.log(props)
    return <h1 className={styles.heading}>{props.children}</h1>;
}

/**
 * No jsx não tem class por que faz parte do próprio js, se usa className
 * essa é uma forma de escopo {styles.heading}
 * props => são propriedades do componente
 */