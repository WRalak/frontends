'use client'

import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-fuchsia-950 text-white px-4 py-2 flex justify-between items-center">
      <h1 className="text-lg font-bold">Gate Pass System</h1>
      <div className="flex items-center">
        <button
          className="mr-4"
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
        <a href="/admin" className="text-white underline">
          Admin Dashboard
        </a>
      </div>
    </nav>
  );
}
