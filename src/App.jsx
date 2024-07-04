import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Cards from './components/Cards/Cards'
import CampoInput from './components/CampoInput/CampoInput'

function App() {
  return(
    <>
     <Banner/>
     
     <main>
        <Cards/>
        <CampoInput/>
     </main>

     <Footer/>
    </>
   
  )
}

export default App
