const TicketSec = () => {
    return (
        <div className="w-full grid grid-cols-12 p-4 gap-4">
            <div className="left-ticket-container col-span-8">
                <h2 className="sub-title">Customer Tickets</h2>
                <div className="grid grid-cols-2 gap-2">
                    <div className="ticket bg-white shadow-md rounded-lg p-3 w-full max-w-sm mx-auto flex flex-col gap-3">

                        {/* Title and status */}
                        <div className="flex justify-between items-start">
                            <h3 className="text-base font-semibold text-gray-800">
                                Login issue - Can't access account.
                            </h3>
                            <p className="text-xs font-medium text-green-600 uppercase bg-green-100 px-2 py-0.5 rounded-full">
                                Open
                            </p>
                        </div>

                        {/* Description */}
                        <p className="desc text-gray-600 text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, minus!
                        </p>

                        {/* Footer: left & right info */}
                        <div className="flex justify-between items-center text-gray-700 text-sm mt-1">

                            {/* Left info */}
                            <div className="flex items-center gap-2">
                                <p className="id font-semibold text-sm">001</p>
                                <p className="priority text-red-600 font-medium text-xs">High Priority</p>
                            </div>

                            {/* Right info */}
                            <div className="flex items-center gap-2 text-right">
                                <p className="name font-semibold text-sm">John Smith</p>
                                <p className="date text-gray-500 text-xs">03-03-2026</p>
                            </div>

                        </div>
                    </div>
                    <div className="ticket bg-white shadow-md rounded-lg p-3 w-full max-w-sm mx-auto flex flex-col gap-3">

                        {/* Title and status */}
                        <div className="flex justify-between items-start">
                            <h3 className="text-base font-semibold text-gray-800">
                                Login issue - Can't access account.
                            </h3>
                            <p className="text-xs font-medium text-green-600 uppercase bg-green-100 px-2 py-0.5 rounded-full">
                                Open
                            </p>
                        </div>

                        {/* Description */}
                        <p className="desc text-gray-600 text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, minus!
                        </p>

                        {/* Footer: left & right info */}
                        <div className="flex justify-between items-center text-gray-700 text-sm mt-1">

                            {/* Left info */}
                            <div className="flex items-center gap-2">
                                <p className="id font-semibold text-sm">001</p>
                                <p className="priority text-red-600 font-medium text-xs">High Priority</p>
                            </div>

                            {/* Right info */}
                            <div className="flex items-center gap-2 text-right">
                                <p className="name font-semibold text-sm">John Smith</p>
                                <p className="date text-gray-500 text-xs">03-03-2026</p>
                            </div>

                        </div>
                    </div>
                    <div className="ticket bg-white shadow-md rounded-lg p-3 w-full max-w-sm mx-auto flex flex-col gap-3">

                        {/* Title and status */}
                        <div className="flex justify-between items-start">
                            <h3 className="text-base font-semibold text-gray-800">
                                Login issue - Can't access account.
                            </h3>
                            <p className="text-xs font-medium text-green-600 uppercase bg-green-100 px-2 py-0.5 rounded-full">
                                Open
                            </p>
                        </div>

                        {/* Description */}
                        <p className="desc text-gray-600 text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, minus!
                        </p>

                        {/* Footer: left & right info */}
                        <div className="flex justify-between items-center text-gray-700 text-sm mt-1">

                            {/* Left info */}
                            <div className="flex items-center gap-2">
                                <p className="id font-semibold text-sm">001</p>
                                <p className="priority text-red-600 font-medium text-xs">High Priority</p>
                            </div>

                            {/* Right info */}
                            <div className="flex items-center gap-2 text-right">
                                <p className="name font-semibold text-sm">John Smith</p>
                                <p className="date text-gray-500 text-xs">03-03-2026</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="right-ticket-container col-span-4 bg-green-400">
                <div>ticket2</div>
            </div>
        </div>
    );
};

export default TicketSec;