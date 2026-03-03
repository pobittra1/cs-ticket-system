
import './App.css'
import HeroSec from './components/HeroSec/HeroSec'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <div className="web-container w-11/12 mx-auto">
        <Navbar></Navbar>
        <HeroSec></HeroSec>
      </div>
    </>
  )
}

export default App
