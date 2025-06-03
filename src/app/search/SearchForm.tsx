"use client";
import { useState } from "react";

export default function SearchFrom() {
  const [query, setQuery] = useState("");

  return (
    <form className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Tìm kiếm quận/ huyện"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-300 transition-colors duration-300"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded-r hover:bg-blue-60 transition"
      >
        🔍
      </button>
    </form>
  );
}
