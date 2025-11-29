import { useState, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

export interface DropdownOption {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
}

interface DropdownProps {
  trigger: React.ReactNode;
  options: DropdownOption[];
  className?: string;
}

const Dropdown = ({ trigger, options, className = "" }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleOptionClick = (option: DropdownOption) => {
    option.onClick();
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer hover:bg-zinc-700 transition-colors rounded-full p-1 inline-block">
        {trigger}
      </div>

      {isOpen && options.length && (
        <div className="absolute right-0 bg-zinc-800 border border-zinc-600 rounded-md shadow-lg z-50 min-w-content overflow-hidden">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`w-full px-4 py-2 text-left text-sm text-white hover:bg-zinc-700 transition-colors duration-150 flex items-center gap-2 ${
                option.className || ""
              } cursor-pointer`}
            >
              {option.icon && <span className="w-4 h-4">{option.icon}</span>}
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
