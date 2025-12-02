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
      className={`bg-interactive-secondary text-primary border-border-subtle focus:border-border-interactive focus:ring-brand-500/20 hover:border-border-default cursor-pointer rounded-md border p-1 focus:ring-2 focus:outline-none ${className}`}
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
