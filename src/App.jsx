import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Formulario from './components/Formulario/Formulario'
import SessaoProdutos from './components/SessaoProdutos/SessaoProdutos'
import { useState } from 'react'

function App() {
  const [produtos, setProdutos] = useState([]);

  const handleFormSubmit = (dados) => {
    setProdutos([...produtos, dados]);
    console.log('Dados do formulário:', dados);
  };

  return(
    <>
     <Banner/>
     
     <main>
        <SessaoProdutos valores={produtos}/>
        <Formulario onSubmit={handleFormSubmit}/>
     </main>

     <Footer/>
    </>
   
  )
}

export default App
