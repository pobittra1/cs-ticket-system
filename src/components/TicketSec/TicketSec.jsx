const TicketSec = () => {
    return (
        <div className="w-full grid grid-cols-12 p-4 gap-4">
            <div className="left-ticket-container col-span-12 lg:col-span-8">
                <h2 className="sub-title">Customer Tickets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="ticket bg-white shadow-lg rounded-lg p-3 w-full max-w-sm mx-auto flex flex-col gap-3">

                        <div className="flex justify-between items-start">
                            <h3 className="text-base font-semibold text-gray-800">
                                Login issue - Can't access account.
                            </h3>
                            <p className="text-xs font-medium text-green-600 uppercase bg-green-100 px-2 py-0.5 rounded-full">
                                Open
                            </p>
                        </div>

                        <p className="desc text-gray-600 text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, minus!
                        </p>

                        <div className="flex justify-between items-center text-gray-700 text-sm mt-1">

                            <div className="flex items-center gap-2">
                                <p className="id font-semibold text-sm">001</p>
                                <p className="priority text-red-600 font-medium text-xs">High Priority</p>
                            </div>

                            <div className="flex items-center gap-2 text-right">
                                <p className="name font-semibold text-sm">John Smith</p>
                                <p className="date text-gray-500 text-xs">03-03-2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-ticket-container col-span-12 lg:col-span-4">
                <div className="task-status-container">
                    <h2 className="sub-title">Task Status</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-2">
                        <div className="task-status-card bg-white text-black p-3 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold capitalize">payment failed - card Declined</h3>
                            <button className="py-1.5 bg-[#02A53B] text-white font-semibold cursor-pointer w-full text-center mt-2">complete</button>
                        </div>
                    </div>
                </div>
                <div className="resolved-task-container mt-8">
                    <h2 className="sub-title">Resolved Task</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-0">
                        <div className="mt-4 bg-[#001931] rounded-sm capitalize">
                            <h3 className="p-2">incorrect billing address</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketSec;