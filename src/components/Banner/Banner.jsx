import * as S from './Style';
import logo from '../../assets/logo.svg'

function Banner (){
    return (
        <S.Header>
            <S.DivContainer>
                <img src={logo} alt="logo Da Alura Greek" />
                <h1>AluraGeek</h1>
            </S.DivContainer>
        </S.Header>
    )
}

export default Banner;
