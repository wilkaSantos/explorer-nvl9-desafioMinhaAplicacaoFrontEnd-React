import { ContainerRegister, Form, Image } from './styles';
import { BiArrowBack } from 'react-icons/bi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function Register(){
    return(
        <ContainerRegister>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <Input placeholder ="Nome"/>
                <Input placeholder ="E-mail"/>
                <Input placeholder ="Senha"/>
                <Button title="Cadastrar"/>
                <Link to="/login">
                    <BiArrowBack />
                    Voltar para o login
                </Link>
            </Form>
            <Image />
        </ContainerRegister>
    );
}