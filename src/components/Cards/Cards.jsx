import * as S from './Style'
import { RiDeleteBin5Line } from "react-icons/ri";

function Cards({imagem, nomeProduto, valor }){
    return (
        <S.DivCard>
            <img src={imagem} alt="" />

            <p className="nomeProduto">{nomeProduto}</p>

            <S.DivContainer>
                <p>{`R$:${valor},00`}</p>
                <RiDeleteBin5Line size={22} />
            </S.DivContainer>
        </S.DivCard>
    )
}

export default Cards;
