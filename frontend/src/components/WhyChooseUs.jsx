import React from "react";

const items = [
  { title: "Potential ROI", desc: "Maximizing your returns through smart strategies." },
  { title: "Design", desc: "Clean, modern, conversion-focused designs." },
  { title: "Marketing", desc: "Performance-driven digital marketing campaigns." }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-14 text-blue-600">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((i, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-8 text-center"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-lg mb-2">{i.title}</h3>
              <p className="text-gray-600 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
