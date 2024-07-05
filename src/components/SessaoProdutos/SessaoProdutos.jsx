import ContainerProdutos from '../ContainerProdutos/ContainerProdutos';
import styled from 'styled-components';

const SessaoDosProdutos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;

    h2{
        text-transform: uppercase;
    }

    .tituloProdutos{
        margin-bottom: 2rem;
    }
    
`

function SessaoProdutos(){
    return (
        <SessaoDosProdutos >
            <h2 className='tituloProdutos'>Meus produtos</h2>
            <ContainerProdutos/>
        </SessaoDosProdutos>
    )
}

export default SessaoProdutos;