import styled from "styled-components";

export const DivCard = styled.div`
    background-color: #5d04d9;
    color: white;

    width: 196px;
    height: 258px;

    border: 3px solid black;
    border-radius: 10px;

    padding: 8px;
    gap: 10px;

    img{
        width: 176px;
        height: 174px;
        border: 3px solid black;
        border-radius: 3px;
    }
    
    .nomeProduto{
        font-size: 12px;
        padding: 12px 0;
    }
    
`

export const DivContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-weight: 100;
        font-size: 14px;
    }
`