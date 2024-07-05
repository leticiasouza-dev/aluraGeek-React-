import * as S from './Style'
import { RiDeleteBin5Line } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';

function Cards({imagem, nomeProduto, valor, removeCard, id }){
    return (
        <S.DivCard >
            <img src={imagem} alt="" />

            <p className="nomeProduto">{nomeProduto}</p>

            <S.DivContainer>
                <p>{`R$:${valor},00`}</p>
                <RiDeleteBin5Line size={22} onClick={() => removeCard(id)}/>
            </S.DivContainer>
        </S.DivCard>
    )
}

export default Cards;
