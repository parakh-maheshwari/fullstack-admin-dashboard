import React, { useState } from "react";
import { subscribeEmail } from "../services/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await subscribeEmail(email);
      setMessage("Subscribed successfully 🎉");
      setEmail("");
    } catch (err) {
      setMessage("Subscription failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-3xl mx-auto text-center px-6">
        
        <h2 className="text-3xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>

        <p className="text-blue-100 mb-8">
          Get the latest updates and offers straight to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-md outline-none"
          />

          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 disabled:opacity-60"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </div>

        
        {message && (
          <p className="mt-4 text-sm text-white">
            {message}
          </p>
        )}

      </div>
    </section>
  );
}
