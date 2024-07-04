import Logo from '../Logo/Logo';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #5300c8;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

    padding: 64px;

    p{
        font-size: 14px;
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
    }
`

function Footer(){
   return(
    <FooterContainer>
        <Logo/>
        <p>Desenvolvido Por Letícia Souza</p>
    </FooterContainer>
   )
}

export default Footer;