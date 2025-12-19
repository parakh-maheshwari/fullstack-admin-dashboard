import React, { useState } from "react";
import heroImg from "../assets/hero.png";
import { sendContact } from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.full_name || !form.email) {
      alert("Name and Email are required");
      return;
    }

    setLoading(true);
    try {
      console.log("SENDING CONTACT:", form);
      await sendContact(form);
      alert("Form submitted successfully");

      setForm({
        full_name: "",
        email: "",
        mobile: "",
        city: "",
      });
    } catch (err) {
      console.error("CONTACT SUBMIT FAILED:", err);
      alert("Submission failed");
    }
    setLoading(false);
  };

  return (
    <section
      id="home"
      className="relative w-full h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 w-full items-center">

        
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Consultation, Design <br /> & Marketing
            </h1>

            <p className="text-gray-200 text-lg max-w-md">
              We help businesses grow through smart strategy, creative design,
              and performance-driven marketing.
            </p>
          </div>

          
          <div className="flex justify-end">
            <div className="w-full max-w-sm bg-white/95 rounded-xl shadow-2xl p-6">
              <h3 className="text-gray-800 font-semibold text-lg mb-4 text-center">
                Get a Free Consultation
              </h3>

              <div className="space-y-3">
                <input
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md text-sm border"
                  placeholder="Full Name"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md text-sm border"
                  placeholder="Email Address"
                />

                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md text-sm border"
                  placeholder="Mobile Number"
                />

                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md text-sm border"
                  placeholder="City"
                />

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm font-semibold mt-2 disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Get Quick Quote"}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
