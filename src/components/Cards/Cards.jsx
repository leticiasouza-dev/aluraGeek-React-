import * as S from './Style'
import { RiDeleteBin5Line } from "react-icons/ri";

function Cards(){
    return (
        <S.DivCard>
            <img src="https://avatars.githubusercontent.com/u/119368474?v=4&size=64" alt="" />

            <p className="nomeProduto">Nome produto</p>

            <S.DivContainer>
                <p>valor</p>
                <RiDeleteBin5Line size={22} />
            </S.DivContainer>
        </S.DivCard>
    )
}

export default Cards;
