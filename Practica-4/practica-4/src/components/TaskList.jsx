/* eslint-disable react/prop-types */

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          {task.text}
          <button onClick={() => toggleTaskCompletion(index)}>
            {task.completed ? "Desmarcar" : "Completar"}
          </button>
          <button onClick={() => deleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
