import { History, Home, Settings, Sun } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
    return (
        <nav className={styles.menu}>
           <a className={styles.menuLink} href="#">
            <Home />
           </a>

           <a className={styles.menuLink} href="#">
            <History />
           </a>
           
           <a className={styles.menuLink} href="#">
            <Settings />
           </a>
           
           <a className={styles.menuLink} href="#">
            <Sun />
           </a>
        </nav>
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