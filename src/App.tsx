import { ContainerPai } from './components/ContainerPai/index.tsx';
import { Logo } from './components/Logo/index.tsx';
import { Menu } from './components/Menu/index.tsx';
import { Contador } from './components/Contador/index.tsx';
import { DefaultInput } from './components/Input/index.tsx';
import { Ciclos } from './components/Ciclos/index.tsx';
import { DefaultButton } from './components/DefaultButton/index.tsx';
import { PlayCircleIcon } from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
    return (
    <>
      <ContainerPai>
        <Logo />
      </ContainerPai>

      <ContainerPai>
        <Menu />
      </ContainerPai>

      <ContainerPai>
        <Contador />
      </ContainerPai>

      <ContainerPai>
        <form className='form' action="">
          <div className="formRow">
            <DefaultInput labelText='Task' id='id' type='text' required placeholder='Digite sua tarefa...'/>
          </div>

          <div className="formRow">
            <Ciclos />
          </div>

          <div className="formRow">
            <p>Ciclos</p>
            <p>0000000</p>
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color='green'/>
          </div>
        </form>
      </ContainerPai>
    </>
    );
}