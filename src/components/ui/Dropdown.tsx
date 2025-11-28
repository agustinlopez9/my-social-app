import { useState, useRef, useEffect } from "react";

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleOptionClick = (option: DropdownOption) => {
    option.onClick();
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-lg z-50 min-w-48 overflow-hidden">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`w-full px-4 py-2 text-left text-sm text-white hover:bg-zinc-600 transition-colors duration-150 flex items-center gap-2 ${
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
