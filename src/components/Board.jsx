const Board = ({task, index, taskList, setTaskList}) =>{

    const handleDelete = () => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1);
        setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))
    }

    return (
        <>
            <div className="max-w-xl flex flex-col items-center justify-center border text-center text-lg px-4 md:px-6 pt-2 pb-4 rounded">
                <p>
                    {task}
                </p>
                <button 
                    className="bg-red-500 text-white rounded-lg py-1 px-2 mt-4"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </>
    )
}
export default Board;