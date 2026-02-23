import { Timer } from 'lucide-react';
import styles from './styles.module.css';

export function Logo() {
    return (
        <div className={styles.logo}>
           <a className={styles.logoLink} href="#">
            <Timer />
            <span>Chronos</span>
           </a>
        </div>
    ); 
}

/**
 * No jsx não tem class por que faz parte do próprio js, se usa className
 * essa é uma forma de escopo {styles.logo}
 * props => são propriedades do componente
 * como se define um tipo em jsx ?
 * type nomedafunçãoProps = {
 *  o que tem no componente... children: e seu tipo string...
 * }
 * 
 * desestruturação em js:
 *  export function Logo({children}: LogoProps) {
 *       return <h1 className={styles.logo}>{children}</h1>;
 *  }
 * 
 * TUDO QUE O REACT ACEITA COMO CHILDREN: React.ReactNode => esse é o tipo
 */