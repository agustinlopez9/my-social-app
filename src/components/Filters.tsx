import { useState } from "react";
import RadioGroup from "./ui/RadioGroup/RadioGroup";
import Select from "./ui/Select";

const OptionLabels = {
  all: "Todos",
  trending: "Populares",
  following: "Seguidos",
};

const options = ["all", "trending", "following"].map((option) => ({
  label: OptionLabels[option as keyof typeof OptionLabels],
  name: OptionLabels[option as keyof typeof OptionLabels],
  value: option.toLowerCase().replace(" ", "-"),
}));

const Filters = () => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  return (
    <div className="flex justify-between gap-2 mb-4 px-2">
      <div className="flex flex-row gap-2">
        <RadioGroup>
          {options.map((option) => (
            <RadioGroup.Item
              key={option.value}
              onChange={handleFilterChange}
              checked={filter === option.value}
              name={option.name}
              label={option.label}
              value={option.value}
            />
          ))}
        </RadioGroup>
      </div>
      <Select options={options} />
    </div>
  );
};

export default Filters;
