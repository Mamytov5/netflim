import React, {useState} from 'react';

const TodoItem = ({idx, tasks, el, deleteTask,updateTask}) => {

    const [newName ,setNewName] = useState(el.name)

    const [editable, setEditable] = useState(false)

    const handleChange = (e) =>{
        setNewName(e.target.value)
    }

    const openInput = () => {
        setEditable(true)
    }
    const saveChanges = (id,name) => {
        updateTask(id,name)
        setEditable(false)
    }
    const cancelEditing = () => {
        setNewName(el.name)
        setEditable(false)

    }
    return (
        <li className={`  w-full  px-4 py-2 ${idx !== tasks.length - 1 ? "border-b" : ""}  border-gray-200 rounded-lg dark:border-gray-600 bg-amber-600 text-amber-50 flex items-center justify-between`}>

            {
                editable ? <input type="text"
                                  onChange={handleChange}
                                  value={newName}
                                  className="text-black rounded "/> : <span>{el.name}</span>


            }

            <div>


                <button
                    onClick={() => editable ? saveChanges(el.id,newName) : openInput()}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    {editable ? "сохранить" : "изменить"}
                </button>

                <button onClick={() => editable ? cancelEditing() : deleteTask(el.id)}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    {
                        editable ? "отмена": "удалить"
                    }
                </button>
            </div>

        </li>
    );
}
export default TodoItem;