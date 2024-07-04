import styled from 'styled-components';
import Logo from '../Logo/Logo';

 const Header = styled.header`
    background-color: #5300C8;

    display: flex;
    justify-content: center;
`

function Banner (){
    return (
        <Header>
            <Logo/>
        </Header>
    )
}

export default Banner;
