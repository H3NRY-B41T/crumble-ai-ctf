import React, { useEffect, useState } from "react";

export default function CrumbleAI() {
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    fetch("/api/flag")
      .then((res) => res.json())
      .then((data) => {
        if (data.flag) setFlag(data.flag);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-black text-white flex flex-col items-center justify-center px-4 font-mono">
      <img src="/crumble.avif" alt="Crumble Cookies" className="w-48 h-48 mb-6 rounded-full border-4 border-purple-400 shadow-2xl" />
      <h1 className="text-5xl mb-4 font-bold text-center">🍪 Welcome to Crumble.AI 🍪</h1>
      <p className="text-purple-300 mb-6 text-center max-w-xl">
        Pakistan's smartest cookie brand just went cyber...<br />Can you impress the AI enough to get a bite?
      </p>

      {flag ? (
        <div className="bg-gray-900 p-6 rounded-xl shadow-xl border border-lime-500">
          <p className="text-green-400 text-xl mb-2">✅ You are admin!</p>
          <code className="text-lime-300 text-lg">{flag}</code>
        </div>
      ) : (
        <p className="text-red-400">❌ You’re not admin. No cookies for you.</p>
      )}
    </div>
  );
}
