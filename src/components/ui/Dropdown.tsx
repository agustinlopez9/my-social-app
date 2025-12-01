import { useState, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

export interface DropdownOption {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  component?: React.ReactNode;
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

  const handleOptionClick = (e: React.MouseEvent) => (option: DropdownOption) => {
    e.stopPropagation();
    option.onClick();
    setIsOpen(false);
  };

  const handleToggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        onClick={handleToggleMenu}
        className="cursor-pointer hover:bg-interactive-secondary transition-colors rounded-full p-1 inline-block"
      >
        {trigger}
      </div>

      {isOpen && options.length && (
        <div className="absolute right-0 bg-surface-secondary border border-border-subtle rounded-md shadow-md z-50 min-w-content overflow-hidden">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={(event) => handleOptionClick(event)(option)}
              className={`flex flex-row gap-2 w-full px-4 py-2 text-left text-sm text-primary hover:bg-interactive-secondary transition-colors ${option.component ? "" : "cursor-pointer"} ${
                option.className || ""
              }`}
            >
              <div className="flex flex-row items-center gap-2">
                {option.icon && <span className="w-4 h-4">{option.icon}</span>}
                <span>{option.label}</span>
              </div>
              {option.component && (
                <div onClick={(e) => e.stopPropagation()}>{option.component}</div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
