import React, { useEffect, useState } from "react";
import {
  addProject,
  addClient,
  getContacts,
  getSubscribers,
} from "../services/api";

export default function Admin() {
  
  const [project, setProject] = useState({
    title: "",
    description: "",
    image: "",
  });

  
  const [client, setClient] = useState({
    name: "",
    designation: "",
    description: "",
    image: "",
  });

  
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  
  useEffect(() => {
    getContacts().then(setContacts);
    getSubscribers().then(setSubscribers);
  }, []);

  

  const handleAddProject = async () => {
    try {
      console.log("SENDING PROJECT:", project);
      await addProject(project);
      alert("Project added successfully");

      
      setProject({ title: "", description: "", image: "" });
    } catch (err) {
      console.error("ADD PROJECT FAILED:", err);
      alert("Failed to add project");
    }
  };

  const handleAddClient = async () => {
    try {
      await addClient(client);
      alert("Client added successfully");

      setClient({
        name: "",
        designation: "",
        message: "",
        image: "",
      });
    } catch (err) {
      console.error("ADD CLIENT FAILED:", err);
      alert("Failed to add client");
    }
  };

  

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-600 mb-10">
          Admin Dashboard
        </h1>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Add Project</h2>

            <input
              placeholder="Title"
              value={project.title}
              onChange={(e) =>
                setProject({ ...project, title: e.target.value })
              }
              className="w-full border p-2 mb-3"
            />

            <input
              placeholder="Image URL"
              value={project.image}
              onChange={(e) =>
                setProject({ ...project, image: e.target.value })
              }
              className="w-full border p-2 mb-3"
            />

            <input
              placeholder="Description / Location"
              value={project.description}
              onChange={(e) =>
                setProject({ ...project, description: e.target.value })
              }
              className="w-full border p-2 mb-4"
            />

            <button
              onClick={handleAddProject}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Project
            </button>
          </div>

          
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Add Client</h2>

            <input
              placeholder="Name"
              value={client.name}
              onChange={(e) =>
                setClient({ ...client, name: e.target.value })
              }
              className="w-full border p-2 mb-3"
            />

            <input
              placeholder="Designation"
              value={client.designation}
              onChange={(e) =>
                setClient({ ...client, designation: e.target.value })
              }
              className="w-full border p-2 mb-3"
            />

            <textarea
              placeholder="Description"
              value={client.description}
              onChange={(e) =>
                setClient({ ...client, description: e.target.value })
              }
              className="w-full border p-2 mb-3"
            />

            <input
              placeholder="Image URL"
              value={client.image}
              onChange={(e) =>
                setClient({ ...client, image: e.target.value })
              }
              className="w-full border p-2 mb-4"
            />

            <button
              onClick={handleAddClient}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Client
            </button>
          </div>

        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Contact Submissions</h2>

            {contacts.length === 0 ? (
              <p className="text-gray-500">No contacts yet</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {contacts.map((c, i) => (
                  <li key={i}>
                    <strong>{c.name}</strong> — {c.email}
                  </li>
                ))}
              </ul>
            )}
          </div>

         
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Subscribers</h2>

            {subscribers.length === 0 ? (
              <p className="text-gray-500">No subscribers yet</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {subscribers.map((s, i) => (
                  <li key={i}>{s.email}</li>
                ))}
              </ul>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
