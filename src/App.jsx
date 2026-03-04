
import './App.css'
import Footer from './components/Footer/Footer'
import HeroSec from './components/HeroSec/HeroSec'
import Navbar from './components/Navbar/Navbar'
import TicketSec from './components/TicketSec/TicketSec'

function App() {


  return (
    <>
      <div className="web-container w-11/12 mx-auto bg-white">
        <Navbar></Navbar>
        <HeroSec></HeroSec>
        <TicketSec></TicketSec>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
