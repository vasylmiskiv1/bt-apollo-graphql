import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";

import { DELETE_PROJECT } from "../mutations/projectMutations";

export default function DeleteProjectButton({ projectId }) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: {
      id: projectId,
    },

    onCompleted: () => navigate("/"),
  });

  return (
    <div className="d-flex ms-auto">
      <button className="btn btn-danger mt-5 px-5" onClick={deleteProject}>
        <FaTrash />
      </button>
    </div>
  );
}
