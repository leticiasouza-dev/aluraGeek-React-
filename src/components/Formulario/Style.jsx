import styled from 'styled-components';

export const FormularioContainer = styled.form`
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

    @media screen and (max-width: 412px) {
        padding: 0;
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

