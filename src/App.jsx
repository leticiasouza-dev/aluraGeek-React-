import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Cards from './components/Cards/Cards'
import Formulario from './components/Formulario/Formulario'

function App() {
  return(
    <>
     <Banner/>
     
     <main>
        <Cards/>
        <Formulario/>
     </main>

     <Footer/>
    </>
   
  )
}

export default App
