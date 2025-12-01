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
      className={`bg-zinc-700 text-white border border-zinc-600 rounded-md p-1 focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500/20 cursor-pointer hover:border-zinc-500 ${className}`}
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
