
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
  const [prevCompletedTask, setCompleteTask] = useState([]);

  const handleEachTicket = (ticket) => {
    const newProgressTask = [...progressTask, ticket];
    setProgressTask(newProgressTask);
    toast(`${ticket.title} - in progress`);
  }

  const handleCompleteTask = (id) => {
    const completedTask = progressTask.filter(eachProessTask => eachProessTask.id === id);
    const newCompletedTask = [...prevCompletedTask, completedTask];
    //set completed task count
    setCompleteTask(newCompletedTask);
    toast(`Task Completed`);

    // update/remove progress task after complete this task
    const updatedProgressTaskAfterCompleted = progressTask.filter(eachProessTask => eachProessTask.id !== id);
    setProgressTask(updatedProgressTaskAfterCompleted);


  }


  return (
    <>
      <div>
        <div className="web-container w-11/12 mx-auto">
          <Navbar></Navbar>
          <HeroSec
            progressTask={progressTask}
            prevCompletedTask={prevCompletedTask}
          ></HeroSec>
          <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <TicketSec
              csProblemsPromise={csProblemsPromise}
              handleEachTicket={handleEachTicket}
              progressTask={progressTask}
              handleCompleteTask={handleCompleteTask}
              prevCompletedTask={prevCompletedTask}
            ></TicketSec>
          </Suspense>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
