export default function SearchFrom() {
  return (
    <form className="flex items-center">
      <input
        type="text"
        placeholder="Tìm kiếm quận/ huyện"
        className="border border-gray-300 rounded px-3 py-1 w-full focus:outline-none focus:ring focus:border-blue-400"
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
