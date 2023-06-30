import { ContainerSection } from './styles';
import { MdStarBorder, MdStar } from 'react-icons/md';
import { Tag } from '../Tag';


export function Section(){
    return(
        <ContainerSection>
            <h2>Interestellar</h2>
            <div>
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStar />
                <MdStarBorder />
            </div>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Em pé sem cair, deitado sem dormir, sentado sem cochilar.</p>
            <div className='wrappedTags'>
                <Tag title ="Ficção Científica" />
                <Tag title ="Drama" />
                <Tag title ="Família" />
            </div>
        </ContainerSection>
    );
}