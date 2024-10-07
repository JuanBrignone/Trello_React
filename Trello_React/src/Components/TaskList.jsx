import React from "react";

export const TaskList = ({task, title}) =>{
    return(
        <div className="column">         {/*esta clase muestra las tareas creadas en una box en la columna */}
            <h2>{title}</h2>
            {task.map((task )=>(
                <div key={task.id} className="box">
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    )
}