const EachPrevCompletedTask = ({ eachPrevCompletedTask }) => {
    //destructuring the values of eachPrevCompletedTask
    const { title } = eachPrevCompletedTask;
    return (
        <div className="mt-4 bg-[#001931] rounded-sm capitalize">
            <h3 className="p-2">{title}</h3>
        </div>
    );
};

export default EachPrevCompletedTask;