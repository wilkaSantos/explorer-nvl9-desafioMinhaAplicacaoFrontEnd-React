import { ContainerLogin, Form, Image } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function Login(){
    return(
        <ContainerLogin>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
                <Button title ="Entrar"/>

                <Link to="/register">Criar conta</Link>
            </Form>
            <Image />
        </ContainerLogin>
    );
}