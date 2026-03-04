import vector1 from "../../assets/vector1.png";

const HeroSec = ({ progressTask, prevCompletedTask }) => {
    return (
        <div className="p-4 min-h-70 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
            <div className=" progress-card bg-linear-to-r from-purple-600 via-purple-500 to-purple-400 w-full md:w-1/2 h-45 rounded-xl grid grid-cols-3">
                <img className="h-full object-contain" src={vector1} alt="vector image" />
                <div className="flex flex-col justify-center items-center font-bold">
                    <h2>In-Progress</h2>
                    <p className="text-4xl">{progressTask.length == 0 ? "0" : progressTask.length}</p>
                </div>
                <img className="h-full object-contain -scale-x-100" src={vector1} alt="vector image" />
            </div>
            <div className="progress-card bg-linear-to-r from-green-600 via-green-500 to-green-400 w-full md:w-1/2 h-45 rounded-xl grid grid-cols-3">
                <img className="h-full object-contain" src={vector1} alt="vector image" />
                <div className="flex flex-col justify-center items-center font-bold">
                    <h2>Resolved</h2>
                    <p className="text-4xl">{prevCompletedTask.length == 0 ? "0" : prevCompletedTask.length}</p>
                </div>
                <img className="h-full object-contain -scale-x-100" src={vector1} alt="vector image" />
            </div>
        </div>
    );
};

export default HeroSec;