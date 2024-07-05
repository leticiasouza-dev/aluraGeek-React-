import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Formulario from './components/Formulario/Formulario'
import SessaoProdutos from './components/SessaoProdutos/SessaoProdutos'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [produtos, setProdutos] = useState([]);

  const handleFormSubmit = (dados) => {
    const novoProduto = {id: uuidv4(), ...dados}
    setProdutos([...produtos, novoProduto]);
    console.log('Dados do formulário:', novoProduto);
  };

  const handleRemoveCard = (id) =>{
    setProdutos(produtos.filter(produtos => produtos.id !== id))
  }

  return(
    <>
     <Banner/>
     
     <main>
        <SessaoProdutos valores={produtos} removeCard={handleRemoveCard}/>
        <Formulario onSubmit={handleFormSubmit}/>
     </main>

     <Footer/>
    </>
   
  )
}

export default App
