import React from "react";

export default function Intro() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        
        <div>
          <h3 className="text-blue-600 font-semibold mb-3">
            Not Your Average Consultant
          </h3>
          <h2 className="text-3xl font-bold mb-4">
            Smarter Strategy. Real Results.
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We blend data-driven insights with creative execution to deliver
            measurable growth for your business.
          </p>
        </div>

       
        <div className="relative h-[350px]">
          
          <div className="absolute top-0 left-1/4 w-48 h-48 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="absolute top-8 right-0 w-28 h-28 rounded-full overflow-hidden shadow">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="absolute bottom-0 right-12 w-32 h-32 rounded-full overflow-hidden shadow">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full"></div>
    </section>
  );
}
