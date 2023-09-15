import React, { useState } from "react";

function App() {
    const [works, setWorks] = useState([]);
    const [data, setData] = useState("");
    function updateList(index) {
        let nData = window.prompt("Enter new Data");
        const nW = [...works]; 
        nW[index] = nData;
        setWorks(nW);
    }
    function deleteItem(index) {

        const nWorks = [...works];
        nWorks.splice(index, 1);
        setWorks(nWorks);
    }
    const AddItem = () => {
        if (data === "" || data === " ") {
            window.alert("please Enter Something")
        }
        else {
            setWorks((prevItems) => {
                return [...prevItems, data];
            });
            setData("");
        }
    };
    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input
                    value={data}
                    onChange={(e) => {
                        setData(e.target.value);
                    }}
                    type="text"
                />
                <button onClick={AddItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {works.map((item, index) => (
                        <li key={index} >
                            {item}
                            <button
                                onClick={() => {
                                    deleteItem(index);
                                }}
                            >
                                Delete
                            </button>

                            <button
                                onClick={() => {
                                    updateList(index);
                                }}
                            >
                                Update
                            </button>
                            <hr />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default App;
