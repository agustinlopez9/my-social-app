import type { SelectHTMLAttributes } from "react";

export interface SelectOption {
  name: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  placeholder?: string;
}

const Select = ({ options, placeholder, className = "", ...props }: SelectProps) => {
  return (
    <select
      className={`bg-interactive-secondary text-primary border border-border-subtle rounded-md p-1 focus:border-border-interactive focus:outline-none focus:ring-2 focus:ring-brand-500/20 cursor-pointer hover:border-border-default ${className}`}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
