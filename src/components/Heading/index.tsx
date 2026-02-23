import styles from './styles.module.css';
// Tipagem para props

type HeadingProps = {
    children: React.ReactNode; 
}

export function Heading(props: HeadingProps) {
    return <h1 className={styles.heading}>{props.children}</h1>;
}

/**
 * No jsx não tem class por que faz parte do próprio js, se usa className
 * essa é uma forma de escopo {styles.heading}
 * props => são propriedades do componente
 * como se define um tipo em jsx ?
 * type nomedafunçãoProps = {
 *  o que tem no componente... children: e seu tipo string...
 * }
 * 
 * desestruturação em js:
 *  export function Heading({children}: HeadingProps) {
 *       return <h1 className={styles.heading}>{children}</h1>;
 *  }
 * 
 * TUDO QUE O REACT ACEITA COMO CHILDREN: React.ReactNode => esse é o tipo
 */