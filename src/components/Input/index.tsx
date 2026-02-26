import styles from './styles.module.css';

type DefaultInputProps = {
    id: string;
    labelText?: string;  // esse ? informa ao Ts que a propriedade existe, mas é opcional.
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps) {
    return (
        <>
            {labelText && <label className={styles.label} htmlFor={id}>{labelText}</label>}
            <input className={styles.input} id={id} type={type} {...rest}/>
        </>
    );
}

/**
 *  type DefaultInputProps = {
 *    type: 'text' | 'number'; 
 * }
 *  em TS isso se chama union type (união de tipos) | = "ou"
 *  
 * 
 *  type DefaultInputProps = {
 *  type: 'number' | 'text';
 * } & {  
 *    abc: string;
 * }; 
 *  esse & é chamado de intersection, ele serve pra unir tudas as propriedades do objeto.
 * 
 * 
 *  type DefaultInputProps = {} & React.ComponentProps<'input'>;
 * é a mesma ideia do intersection, mas nesse caso são as propriedades do componente e dai eu escolho
 * qual a propriedade.
 * 
 * labelText && <label htmlFor={id}>{labelText}</label> => isso é js, se tiver labellText && = exiba <label ...
 * 
 *  ...rest => o restante das propriedades que vinherem do input
 */
