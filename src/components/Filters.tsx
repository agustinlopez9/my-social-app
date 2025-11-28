import Select from "./ui/Select";

const options = ["Mas reciente", "Mas popular", "Mas activo"].map((option) => ({
  name: option,
  value: option.toLowerCase().replace(" ", "-"),
}));

const Filters = () => {
  return (
    <div className="flex justify-between gap-2 mb-4 px-2">
      <div className="flex flex-row gap-2">
        <button className="bg-zinc-700 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">Todos</button>
        <button className="bg-zinc-700 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
          Populares
        </button>
        <button className="bg-zinc-700 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
          Seguidos
        </button>
      </div>
      <Select options={options} />
    </div>
  );
};

export default Filters;
