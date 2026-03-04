
import { Suspense, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import HeroSec from './components/HeroSec/HeroSec'
import Navbar from './components/Navbar/Navbar'
import TicketSec from './components/TicketSec/TicketSec'
import { toast } from 'react-toastify'

const csProblemsPromise = fetch("/cs-problems.json").then(res => res.json());
function App() {

  const [progressTask, setProgressTask] = useState([])

  const handleEachTicket = (ticket) => {
    const newProgressTask = [...progressTask, ticket];
    setProgressTask(newProgressTask);
    toast(`${ticket.title} - in progress`);
  }


  return (
    <>
      <div>
        <div className="web-container w-11/12 mx-auto">
          <Navbar></Navbar>
          <HeroSec progressTask={progressTask}></HeroSec>
          <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <TicketSec
              csProblemsPromise={csProblemsPromise}
              handleEachTicket={handleEachTicket}
              progressTask={progressTask}
            ></TicketSec>
          </Suspense>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
