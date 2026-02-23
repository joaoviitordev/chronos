import { ContainerPai } from './components/ContainerPai/index.tsx';
import { Logo } from './components/Logo/index.tsx';
import { Menu } from './components/Menu/index.tsx';

import './styles/theme.css';
import './styles/global.css';


export function App() {
    return (
    <>
      <ContainerPai>
        <Logo></Logo>
      </ContainerPai>

      <ContainerPai>
        <Menu />
      </ContainerPai>
    </>
    );
}


/**
*  o que eu "retorno" é o que será exibido la na página
*  export { App }; => uma maneira de exportar 
*  export function App () {} => outra maneira de exportar
*  <> </> => é um elemento/fraguimento do React, funciona como um elemento pai, ex.: div, main, section
*  no react não pode ter elementos filhos sem elementos pais
*  o jsx te força ater sempre um elemento pai
*  em jsx eu posso passar elementos dentro da tag do componente ex.: <Heading> Olá, Mundo! 1</Heading>, Olá, Mundo! 1 é children, mas tambem posso passar atributos na tag <Heading attr={123} attr2='ABC'> Olá, Mundo! 1</Heading>
*/
