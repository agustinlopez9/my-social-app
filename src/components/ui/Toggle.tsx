import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface ToggleProps {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const Toggle = ({ options, defaultValue, onChange, className = "" }: ToggleProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || options[0]?.value);

  const handleToggle = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <div className={`inline-flex rounded-md bg-zinc-700 p-1 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleToggle(option.value)}
          className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
            selectedValue === option.value
              ? "bg-orange-600 text-white"
              : "text-zinc-300 hover:text-white"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Toggle;
