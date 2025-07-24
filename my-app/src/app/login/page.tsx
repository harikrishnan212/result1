"use client"
import React, { useState, FormEvent } from "react";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://curly-palm-tree-4jrx4wwpr6qxcjqj9-3000.app.github.dev/api", {
        name,
        password,
      });

      console.log("Response:", response.data);
      alert("Data submitted successfully!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Enter your name:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <p>Enter your password:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
