import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCalendar } from '@fortawesome/free-solid-svg-icons'
const EachTicket = ({ ticket }) => {
    //destructure values from ticket
    const { id, title, description, customer, priority, status, createdAt } = ticket
    return (
        <div className="ticket bg-white shadow-lg rounded-lg p-3 w-full max-w-sm mx-auto flex flex-col gap-3">

            <div className="flex justify-between items-start">
                <h3 className="text-base font-semibold text-gray-800">
                    {title}
                </h3>
                <p className={`shrink-0 text-xs font-medium  uppercase bg-green-100 px-2 py-0.5 rounded-full ${status == "Open" ? "text-green-600" : "text-yellow-600"}`}>
                    <FontAwesomeIcon icon={faCircle} /> {status}
                </p>
            </div>

            <p className="desc text-gray-600 text-sm">
                {description}
            </p>

            <div className="flex justify-between items-center text-gray-700 text-sm mt-1">

                <div className="flex items-center gap-2">
                    <p className="id font-semibold text-sm">#{id}</p>
                    <p
                        className={`priority font-medium text-xs 
                            ${priority === "High Priority" ? "text-red-600"
                                : priority === "Medium Priority" ? "text-yellow-600"
                                    : "text-green-600"
                            }`}
                    >
                        {priority}
                    </p>
                </div>

                <div className="flex items-center gap-2 text-right">
                    <p className="name font-semibold text-sm">{customer}</p>
                    <p className="date text-gray-500 text-xs"><FontAwesomeIcon icon={faCalendar} />{createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default EachTicket;