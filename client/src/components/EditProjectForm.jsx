import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";

import { UPDATE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECT } from "../queries/projectQueries";

import { projectStatusList } from "../consts/projectStatus";

export default function EditProjectForm({ project }) {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      description,
      status,
    },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !status) {
      return alert("All fields are required");
    }

    updateProject(name, description, status);
  };

  useEffect(() => {
    setStatus(
      projectStatusList.find((status) => status.text === project.status).value
    );
  }, [project.status]);

  return (
    <div className="mt-5">
      <h3>Update the project details</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            {projectStatusList.map((status, i) => (
              <option key={i} value={status.value}>{status.text}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          data-bs-dismiss="modal"
          className="btn btn-success"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
