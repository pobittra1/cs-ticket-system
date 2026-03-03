const HeroSec = () => {
    return (
        <div className="p-4 min-h-70 flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="progress-card bg-red-500 w-full md:w-1/2 h-45 rounded-xl bg-linear-to-r from-purple-600 via-purple-500 to-purple-400 flex flex-col justify-center items-center text-2xl font-bold">
                <h2>In-Progress</h2>
                <p className="text-4xl">0</p>
            </div>
            <div className="resolved-card bg-green-400 w-full md:w-1/2 h-45 rounded-xl bg-linear-to-r from-green-400 via-green-500 to-green-600 flex flex-col justify-center items-center text-2xl font-bold">
                <h2>Resolved</h2>
                <p className="text-4xl">0</p>
            </div>
        </div>
    );
};

export default HeroSec;