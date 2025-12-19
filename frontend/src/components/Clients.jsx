import React, { useEffect, useState } from "react";
import { getClients } from "../services/api";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getClients()
      .then((data) => setClients(data))
      .catch(() => alert("Failed to load clients"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-16">
          Happy Clients
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading testimonials...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {clients.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
              >
                {/* Image */}
                <div className="flex justify-center mb-4">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-blue-100"></div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
                  {c.description ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </p>

                {/* Footer */}
                <div className="mt-auto text-center">
                  <h4 className="font-semibold text-blue-600">
                    {c.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {c.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
