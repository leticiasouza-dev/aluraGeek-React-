import styled from 'styled-components';

export const FormularioContainer = styled.form`
border: 1px solid black;
    width: 472px;
    height: 517px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    padding: 40px;

    h2{
        font-size: 24px;
        text-align: center;
    }
`

export const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
`

export const DivBotoes = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-around;

`