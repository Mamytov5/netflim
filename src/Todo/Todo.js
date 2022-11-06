import React, {useState} from 'react';
import TodoItem from "./TodoItem";

const Todo = () => {

    const [name, setName] = useState("")

    const [tasks, setTasks] = useState([])

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const addTask = () => {
        if (name.trim()) {
            const newTask = {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                name: name,
                isCompleted:false
            }
            setTasks([...tasks, newTask])
            setName("")
        }
    }
    const deleteTask = (id) => {
        console.log(id)
        setTasks(tasks.filter(el => {
            return el.id !== id
        }))
    }
    const updateTask = (id, newName) => {
        setTasks(tasks.map(el => el.id === id ? {...el, name: newName} : el))
    }
    const onEnter = (e) => {
        if (e.key === "Enter") {
            addTask()
        }
    }
    return (
        <div className="container p-6">
            <div className="flex flex-row flex-wrap justify-center">
                <div className="basis-1/3">
                    <div className="flex items-center">
                        <input
                            onKeyDown={onEnter}
                            onChange={handleChange}
                            value={name}
                            className="bg-gray-50 border p-5 border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-amber-600 text-amber-50"
                            required/>
                        <button
                            onClick={addTask}
                            className=" mx-3 my-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 bg-amber-600 ">Добавить
                        </button>
                    </div>
                    <ul className="my-6 text-sm font-medium text-gray-900 bg-white  border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        {
                            tasks.map((el, idx) => (
                                <TodoItem el={el} idx={idx} updateTask={updateTask} key={el.id} tasks={tasks}
                                          deleteTask={deleteTask}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Todo;