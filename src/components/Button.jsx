export default function Button({ children }) {
  return (
    <button className="flex gap-2 px-4 py-2 rounded-lg text-white font-medium">
      {children}
    </button>
  );
}
