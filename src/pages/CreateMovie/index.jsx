import { ContainerCreate, Form } from './styles';
import { BiArrowBack } from 'react-icons/bi';
import { Header } from '../../components/Header';
import { Item } from '../../components/Item';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';


export function CreateMovie({  }){
    return(
        <ContainerCreate>
            <Header />
            <Link to="/">
                <BiArrowBack />
                Voltar
            </Link>
            <Form>
                <h1>Novo Filme</h1>
                <section className='wrappedInputs'>
                    <Input placeholder ="Título" />
                    <Input placeholder ="Sua nota (de 0 a 5)" />
                </section>
                <textarea placeholder='Observações'></textarea>

                <h2>Marcadores</h2>
                <section className='wrappedItems'>
                    <Item value="React" />
                    <Item isNew placeholder="Nova tag" />
                </section>
                <section className='wrappedButton'>
                    <Button title="Excluir filme" />
                    <Button title="Salvar alterações" />
                </section>
            </Form>
        </ContainerCreate>
    );
}