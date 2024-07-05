import CampoInput from '../CampoInput/CampoInput';
import Botoes from '../Botoes/Botoes';

import * as S from './Style';
import { useState } from 'react';

function Formulario(){
    const [nome, setNome] = useState('')
    const [valor, setValor] = useState();
    const [imagem, setImagem] = useState('');

    const aoGuardar  = (evento) => {
        evento.preventDefault();
        console.log(nome)
        console.log(valor)
        console.log(imagem)
    }

    const aoLimpar = (evento) => {
        evento.preventDefault();

        setNome('');
        setValor('');
        setImagem('');
    }

    return(
        <S.FormularioContainer>
            <h2>Adicionar Produto: </h2>

            <S.DivInputs>
                <CampoInput placeholder='nome..' type='text' valor={nome} aoDigitar={evento => setNome(evento.target.value) }/>
                <CampoInput placeholder='valor..' type='number' valor={valor} aoDigitar={evento => setValor(evento.target.value)}/>
                <CampoInput placeholder='Imagem...' type='text' valor={imagem} aoDigitar={evento => setImagem(evento.target.value)}/>
            </S.DivInputs>
            

            <S.DivBotoes>
                <Botoes nome="Guardar" style={{backgroundColor: '#03318C'}} onClick={aoGuardar}/>
                <Botoes nome='Limpar' style={{backgroundColor: '#fff'}} onClick={aoLimpar}/>
            </S.DivBotoes>
            
        </S.FormularioContainer>
    )
}

export default Formulario;