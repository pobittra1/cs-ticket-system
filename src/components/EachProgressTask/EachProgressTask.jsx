const EachProgressTask = ({ eachProgressTask }) => {
    //destructure the values
    const { title } = eachProgressTask;
    return (

        <div className="task-status-card bg-white text-black p-3 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold capitalize">{title}</h3>
            <button className="py-1.5 bg-[#02A53B] text-white font-semibold cursor-pointer w-full text-center mt-2">complete</button>
        </div>
    );
};

export default EachProgressTask;