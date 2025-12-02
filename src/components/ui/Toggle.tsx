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
    <div className={`bg-interactive-secondary inline-flex rounded-md p-1 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleToggle(option.value)}
          className={`rounded px-3 py-1 text-sm font-medium transition-colors ${
            selectedValue === option.value
              ? "bg-interactive-primary text-on-brand"
              : "text-secondary hover:text-primary"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Toggle;
