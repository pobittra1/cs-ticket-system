
import './App.css'
import HeroSec from './components/HeroSec/HeroSec'
import Navbar from './components/Navbar/Navbar'
import TicketSec from './components/TicketSec/TicketSec'

function App() {


  return (
    <>
      <div className="web-container w-11/12 mx-auto">
        <Navbar></Navbar>
        <HeroSec></HeroSec>
        <TicketSec></TicketSec>
      </div>
    </>
  )
}

export default App
