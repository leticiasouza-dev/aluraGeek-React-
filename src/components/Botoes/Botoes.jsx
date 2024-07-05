import styled from "styled-components";

const Botao = styled.button`
    width: 188px;
    height: 55px;
    border-radius: 15px;
    border: 3px solid #03318C;
    cursor: pointer;

    @media screen and (max-width: 412px) {
        max-width: 164px;
    }
`

function Botoes({nome, style, onClick}){
    return (
        <Botao style={style} onClick={onClick}>
            {nome}
        </Botao>
    )
}

export default Botoes;