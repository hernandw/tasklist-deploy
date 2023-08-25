import { useEffect, useState } from "react";
import TaskEdit from "./TaskEdit";

const Tasklist = () => {
  const baseURL = "http://localhost:3000/tasks";
  const [description, setDescription] = useState([]);

  const deleteTask = (id) => {
    try {
      fetch(`${baseURL}/${id}`, {
        method: "DELETE",
      });
      setDescription(description.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(baseURL);
    const data = await response.json();
    setDescription(data);
  };

  return (
    <div>
      <h1 className="text-center mt-5">Lista de Tareas</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Descripcion</th>
            <th colSpan="2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {description.map((task) => (
            <tr key={task.id}>
              <td>{task.description}</td>
              <td>
                <div>
                  <div className="btn btn-primary"><TaskEdit task={task} /></div>
                </div>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTask(task.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasklist;
