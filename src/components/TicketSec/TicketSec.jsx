import { use } from 'react';
import EachTicket from '../EachTicket/EachTicket';
import EachProgressTask from '../EachProgressTask/EachProgressTask';
import EachPrevCompletedTask from '../EachPrevCompletedTask/EachPrevCompletedTask';
const TicketSec = ({ csProblemsPromise, handleEachTicket, progressTask, handleCompleteTask, prevCompletedTask }) => {

    const tickets = use(csProblemsPromise);
    return (
        <div className="w-full grid grid-cols-12 p-4 gap-4">
            <div className="left-ticket-container col-span-12 lg:col-span-8">
                <h2 className="sub-title">Customer Tickets</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        tickets.map(ticket => <EachTicket
                            key={ticket.id}
                            ticket={ticket}
                            handleEachTicket={handleEachTicket}
                        ></EachTicket>)
                    }
                </div>
            </div>
            <div className="right-ticket-container col-span-12 lg:col-span-4">
                <div className="task-status-container">
                    <h2 className="sub-title">Task Status</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-2">
                        {
                            progressTask.length === 0 ? <p className='text-gray-600'>Select a ticket to add to Task Status</p> :
                                progressTask.map(eachProgressTask => <EachProgressTask
                                    key={eachProgressTask.id}
                                    eachProgressTask={eachProgressTask}
                                    handleCompleteTask={handleCompleteTask}
                                ></EachProgressTask>)
                        }
                    </div>
                </div>
                <div className="resolved-task-container mt-8">
                    <h2 className="sub-title">Resolved Task</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-0">
                        {
                            prevCompletedTask.length === 0 ? (
                                <p className="text-gray-600">No Resolved Task Yet</p>
                            ) : (
                                prevCompletedTask.map((eachPrevCompletedTasks, Index) =>
                                    // inner array empty check
                                    eachPrevCompletedTasks.length === 0 ? (
                                        <p key={Index} className="text-gray-600">No Resolved Task Yet</p>
                                    ) : (
                                        eachPrevCompletedTasks.map(eachPrevCompletedTask => (
                                            <EachPrevCompletedTask
                                                key={eachPrevCompletedTask.id}
                                                eachPrevCompletedTask={eachPrevCompletedTask}
                                            ></EachPrevCompletedTask>
                                        ))
                                    )
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketSec;