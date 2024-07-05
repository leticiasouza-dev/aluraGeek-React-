import Cards from '../Cards/Cards';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid black;
    max-width: 678px;
    height: 971px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 50px;

    overflow-y: auto;

    padding: 15px;
`

function ContainerProdutos(){
    return(
        <Container>
            <Cards/>
            <Cards/>
            <Cards/>
        </Container>
    )
}

export default ContainerProdutos;