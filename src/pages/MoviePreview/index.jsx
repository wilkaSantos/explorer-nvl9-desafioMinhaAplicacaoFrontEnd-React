import { ContainerPreview, Content } from './styles';
import { MdStarBorder, MdStar } from 'react-icons/md';
import { LuClock3 } from 'react-icons/lu';
import { BiArrowBack } from 'react-icons/bi';
import { Header } from '../../components/Header';
import { Tag } from '../../components/Tag';
import { Link } from 'react-router-dom';

export function Preview(){
    return(
        <ContainerPreview>
            <Header />
            <Link to="/">
                <BiArrowBack />
                Voltar
            </Link>
            <Content>
                <section>
                    <h1>Interestellar</h1>
                    <div>
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStarBorder />
                    </div>
                </section>
                <div className='wrappedUserData'>
                    <img src="https://github.com/wilkaSantos.png" alt="Imagem do usuario"/>
                    <p>Por Wilka Santos</p>
                    <LuClock3 />
                    <p>23/05/22 ás 08:00</p>
                </div>
                <div className='wrappedTags'>
                    <Tag title ="Ficção Científica" />
                    <Tag title ="Drama" />
                    <Tag title ="Família" />
                </div>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Manduma pindureta quium dia nois paga.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. A ordem dos tratores não altera o pão duris.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Cevadis im ampola pa arma uma pindureta.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.Mauris aliquet nunc non turpis scelerisque, eget.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Manduma pindureta quium dia nois paga.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. A ordem dos tratores não altera o pão duris.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Cevadis im ampola pa arma uma pindureta.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.Manduma pindureta quium dia nois paga.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.<br/>
                <br/>
                Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Quem num gosta di mé, boa gentis num é.</p>
            </Content>
        </ContainerPreview>
    );
}