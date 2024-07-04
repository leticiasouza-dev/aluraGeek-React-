import styled from "styled-components"

const Input = styled.input`
    width: 350px;
    height: 58px;
    border: 2px solid #03318c;
    border-radius: 50px;
    outline: none;
    
    cursor: pointer;
`

function CampoInput (){
    return(
        <Input placeholder="oii.." type="text"/>
    )
}

export default CampoInput