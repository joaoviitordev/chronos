type DefaultInputProps = {
    id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type }: DefaultInputProps) {
    return (
        <>
            <label htmlFor={id}>Task</label>
            <input id={id} type={type} />
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
 */
