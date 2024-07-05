import styled from 'styled-components';
import Cards from '../Cards/Cards'

const Container = styled.div`
    width: 678px;
    height: 971px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 50px;

    overflow-y: auto;

    padding: 15px;
    box-shadow: -12px 10px 5.8px 0px #00000040;

    @media screen and (max-width: 835px) {
        text-align: center;
        width: 300px;
        height: 336px;
    }
`

function ContainerProdutos({valores, removeCard}){
    return(
        <Container valores={valores}>
            {valores.map(valor => <Cards key={valor.id} id={valor.id} removeCard={removeCard} nomeProduto={valor.nome} imagem={valor.imagem} valor={valor.valor} />)}
        </Container>
    )
}

export default ContainerProdutos;