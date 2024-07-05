import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Formulario from './components/Formulario/Formulario'
import SessaoProdutos from './components/SessaoProdutos/SessaoProdutos'

function App() {
  return(
    <>
     <Banner/>
     
     <main>
        <SessaoProdutos/>
        <Formulario/>
     </main>

     <Footer/>
    </>
   
  )
}

export default App
