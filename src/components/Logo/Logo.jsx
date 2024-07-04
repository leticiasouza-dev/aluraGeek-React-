import styled from 'styled-components'
import logo from '../../assets/logo.svg'

const DivLogo = styled.div`
    color: white;
    display: flex;
    font-size: 12px;
    align-items: center;
`

function Logo (){
    return (
        <DivLogo>
            <img src={logo} alt="logo Da Alura Greek" />
            <h1>AluraGeek</h1>
        </DivLogo>
    )
}

export default Logo;