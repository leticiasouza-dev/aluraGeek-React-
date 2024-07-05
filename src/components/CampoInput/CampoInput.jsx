import styled from "styled-components"

const Input = styled.input`
    width: 392px;
    height: 58px;
    border: 3px solid #03318c;
    border-radius: 50px;
    outline: none;
    
    cursor: pointer;
    margin: 1rem;

    @media screen and (max-width: 412px) {
        max-width: 350px;
    }
`

function CampoInput ({placeholder, type, valor, aoDigitar}){
    return(
        <Input placeholder={placeholder} type={type} required value={valor} onChange={aoDigitar}/>
    )
}

export default CampoInput