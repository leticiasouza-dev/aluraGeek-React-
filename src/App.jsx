import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Formulario from './components/Formulario/Formulario'
import ContainerProdutos from './components/ContainerProdutos/ContainerProdutos'

function App() {
  return(
    <>
     <Banner/>
     
     <main>
        <Formulario/>
        <ContainerProdutos/>
     </main>

     <Footer/>
    </>
   
  )
}

export default App
