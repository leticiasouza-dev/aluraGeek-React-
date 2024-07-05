import CampoInput from '../CampoInput/CampoInput';
import Botoes from '../Botoes/Botoes';

import * as S from './Style';

function Formulario(){


    return(
        <S.FormularioContainer>
            <h2>Adicionar Produto: </h2>

            <S.DivInputs>
                <CampoInput placeholder='nome..' type='text'/>
                <CampoInput placeholder='valor..' type='number'/>
                <CampoInput placeholder='imagem...' type='text'/>
            </S.DivInputs>
            

            <S.DivBotoes>
                <Botoes nome="Guardar" style={{backgroundColor: '#03318C'}}/>
                <Botoes nome='Limpar' style={{backgroundColor: '#fff'}}/>
            </S.DivBotoes>
            
        </S.FormularioContainer>
    )
}

export default Formulario;