import Button from "./ui/Button";
import Select from "./ui/Select";

const options = ["Mas reciente", "Mas popular", "Mas activo"].map((option) => ({
  name: option,
  value: option.toLowerCase().replace(" ", "-"),
}));

const Filters = () => {
  return (
    <div className="flex justify-between gap-2 mb-4 px-2">
      <div className="flex flex-row gap-2">
        <Button variant="secondary">Todos</Button>
        <Button variant="secondary">Populares</Button>
        <Button variant="secondary">Seguidos</Button>
      </div>
      <Select options={options} />
    </div>
  );
};

export default Filters;
