import React, {useState} from "react";

export const TaskForm = ({addtask}) =>{
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && descriprion) {
            addTask(title, description)
            setTitle("")
            setDescription("")
        }
    }

    return (
        <div className="column">
            <h2>Añadir Tarea</h2>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            value={description}
                            onChange={(e)=>setDescription(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <div className="control">
                    <button className="button is-primary" type="submit">Add Task</button>
                </div>
            </form>
        </div>
    )
}