import { ContainerHeader } from './styles';
import { Input } from '../../components/Input';

export function Header(){
    return(
        <ContainerHeader>
            <h1>Rocketmovies</h1>
            <Input placeholder="Pesquisar pelo título" />
            <section>
                <div>
                    <h2>Wilka Santos</h2>
                    <a href="/">Sair</a>
                </div>
                <img src="https://github.com/wilkaSantos.png" alt="Foto do usuario" />
            </section>
        </ContainerHeader>
    );
}