// import { useState } from "react";
// import { FaList, FaListAlt } from "react-icons/fa";
// import { useMutation, useQuery } from "@apollo/client";
// import { GET_PROJECTS } from "../queries/projectQueries";

// export default function AddProjectModal() {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [clientId, setClientId] = useState("");
//   const [status, setStatus] = useState("new");

//   const [addClient] = useMutation(ADD_CLIENT, {
//     variables: { name, email, phone },
//     update(cache, { data: { addClient } }) {
//       const { clients } = cache.readQuery({ query: GET_CLIENTS });

//       cache.writeQuery({
//         query: GET_CLIENTS,
//         data: { clients: [...clients, addClient] },
//       });
//     },
//   });

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (name === "" || email === "" || phone === "") {
//       return alert('Should fill in all fields');
//     }

//     addClient(name, email, phone);
//     setName("");
//     setEmail("");
//     setPhone("");
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="btn btn-primary"
//         data-bs-toggle="modal"
//         data-bs-target="#addProjectModal"
//       >
//         <div className="d-flex align-items-center">
//           <FaList className="icon" />
//           <div>New Project</div>
//         </div>
//       </button>

//       <div
//         className="modal fade"
//         id="addProjectModal"
//         aria-labelledby="addProjectModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="addProjectModalLabel">
//                 Add Project
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <form onSubmit={onSubmit}>
//                 <div className="mb-3">
//                   <label className="form-label">Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Description</label>
//                   <textarea
//                     className="form-control"
//                     id="description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                   ></textarea>
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Status</label>
//                   <select name="" id="" className="form-select">

//                   </select>
//                 </div>

//                 <button
//                   type="submit"
//                   data-bs-dismiss="modal"
//                   className="btn btn-secondary"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
