import CampoInput from '../CampoInput/CampoInput';
import Botoes from '../Botoes/Botoes';

import * as S from './Style';

function Formulario(){
    return(
        <S.FormularioContainer>
            <h2>Adicionar Produto: </h2>

            <S.DivInputs>
                <CampoInput/>
                <CampoInput/>
                <CampoInput/>
            </S.DivInputs>
            

            <S.DivBotoes>
                <Botoes/>
                <Botoes/>
            </S.DivBotoes>
            
        </S.FormularioContainer>
    )
}

export default Formulario;