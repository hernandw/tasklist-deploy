import { useState } from "react"


const TaskForm = () => {
  const [description, setDescription] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const body = { description }
      fetch("https://backend-tasklist.onrender.com/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/task"
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1 className="text-center mt-5">Agregar Tareas</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label className="form-label" htmlFor="title">Descripcion:</label>
          <input className="form-control" type="text" id="title" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button className="btn btn-primary mt-3">Agregar</button>
      </form>
    </div>
  )
}

export default TaskForm
