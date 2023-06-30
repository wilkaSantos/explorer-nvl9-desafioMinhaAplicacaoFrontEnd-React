import { ContainerHome, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';


export function Home(){
    return(
        <ContainerHome>
            <Header />
            <section>
                <h1>Meus Filmes</h1>
                <Button title ="+ Adicionar filme" />
            </section>
            <Content>
                <Section />
                <Section />
                <Section />
            </Content>          
        </ContainerHome>
    );
}