
import { Suspense } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import HeroSec from './components/HeroSec/HeroSec'
import Navbar from './components/Navbar/Navbar'
import TicketSec from './components/TicketSec/TicketSec'

const csProblemsPromise = fetch("/cs-problems.json").then(res => res.json());
function App() {

  return (
    <>
      <div>
        <div className="web-container w-11/12 mx-auto">
          <Navbar></Navbar>
          <HeroSec></HeroSec>
          <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <TicketSec csProblemsPromise={csProblemsPromise}></TicketSec>
          </Suspense>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
