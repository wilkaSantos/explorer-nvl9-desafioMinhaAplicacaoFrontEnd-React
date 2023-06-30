import { ContainerProfile, Form, Avatar } from './styles';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineCamera } from 'react-icons/ai';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

export function Profile(){
    return(
        <ContainerProfile>
            <header>
                <Link to="/">
                    <BiArrowBack />
                    Voltar
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/wilkaSantos.png" alt="Foto do usuário" />
                    <label htmlFor="avatar">
                        <AiOutlineCamera />
                        <input type="file" id="avatar" />
                    </label>
                </Avatar>
                <Input type="text" placeholder ="Wilka Santos" />
                <Input type="text" placeholder ="ws@email.com" />
                <Input type="password" placeholder ="Senha atual" />
                <Input type="password" placeholder ="Nova senha" />
                <Button title="Salvar" />
                
            </Form>                
        </ContainerProfile>
    );
}