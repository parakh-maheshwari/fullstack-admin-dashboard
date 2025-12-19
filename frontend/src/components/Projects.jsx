import React, { useEffect, useState } from "react";
import { getProjects } from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((data) => {
        const normalized = data.map((p) => ({
          title: p.title || p.name,
          image: p.image,
          description: p.description,
        }));
        setProjects(normalized);
      })
      .catch(() => alert("Failed to load projects"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-16">
          Our Projects
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading projects...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
              >
                <div className="h-40 bg-blue-100">
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-blue-600 mb-1">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4">
                    {p.description || "Project Description"}
                  </p>

                  <div className="mt-auto">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-5 py-2 rounded-md">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
