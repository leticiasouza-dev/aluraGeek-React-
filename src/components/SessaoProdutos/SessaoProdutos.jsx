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

    @media screen and (max-width: 835px) {
        padding: 0;

        .tituloProdutos{
            text-align: center;
            white-space: nowrap;
            
        }
    }
    
`

function SessaoProdutos({valores, removeCard}){
    return (
        <SessaoDosProdutos>
            <h2 className='tituloProdutos'>Meus produtos:</h2>
            <ContainerProdutos valores={valores} removeCard={removeCard}/>
        </SessaoDosProdutos>
    )
}

export default SessaoProdutos;