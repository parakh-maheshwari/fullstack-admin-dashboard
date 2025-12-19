import React from "react";

export default function About() {
  return (
    <section className="py-20 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">
          About Us
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          We are a team of experienced consultants, designers, and marketers
          helping brands achieve long-term success.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Learn More
        </button>
      </div>
    </section>
  );
}
