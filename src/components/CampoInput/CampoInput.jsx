import styled from "styled-components"

const Input = styled.input`
    width: 392px;
    height: 58px;
    border: 2px solid #03318c;
    border-radius: 50px;
    outline: none;
    
    cursor: pointer;
    margin: 1rem;

    @media screen and (max-width: 412px) {
        max-width: 350px;
    }
`

function CampoInput (){
    return(
        <Input placeholder="oii.." type="text"/>
    )
}

export default CampoInput