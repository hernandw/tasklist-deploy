import { useState } from "react";
import PropTypes from "prop-types";

const TaskEdit = ({ task }) => {
  
  const [description, setDescription] = useState(task.description);
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`https://localhost:3000/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/task";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${task.id}`}
      >
        Editar
      </button>

      <div
        className="modal fade"
        id={`id${task.id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-primary"
                id="staticBackdropLabel"
              >
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={updateDescription}
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TaskEdit.propTypes = {
  task: PropTypes.object.isRequired,
};
export default TaskEdit;
