import { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
    const [todos, setTodos] = useState([
        {
            id:1,
            data:"Add more data here"
        },
        {
            id:2,
            data:"Click on input box to add new data"
        }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormData = (e) => {
        e.preventDefault();
        const newId = Math.floor(Math.random(1212121, 121212) * 123456);
        if (inputValue.trim() !== '') {
            setTodos([...todos, { id: newId, data: inputValue }]);
        }
        document.getElementById("form").reset();
        setInputValue("");
    }

    const handleDeleteTodo = (id) => {
        const isConfirm = window.confirm("Are you want to delete this data?");
        if (isConfirm) {
            const updatedTodos = todos.filter((item) => item.id !== id);
            setTodos(updatedTodos);
        }

    };

    return (<>
        <div className="spaceDiv"></div>
        <div id="toToListBody">
            <h2 className="headerText"> To <span style={{color:"lime"}}>do</span> list </h2>
            <div className="header">
                <form onSubmit={handleFormData} id="form"  autoComplete="off">
                  <div>
                  <input type="text" placeholder="Add some new data"
                        onChange={(e) => handleInputChange(e)} name="dataFeild" id="addNewData" />
                  </div>
                   <div>
                   <button id="addButton"  type="submit">Add todo</button>
                   </div>
                </form>
            </div>
            <div className="mainBoy">
                {
                    todos.map((item, i) => {
                        return (
                            <div className="data" key={i}>
                                <div className="showData">
                                    <p>{item?.data}</p>
                                </div>
                                <button id="delete" onClick={() => handleDeleteTodo(item?.id)}>
                                    Delete
                                </button>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    </>)
}
export default ToDoList;