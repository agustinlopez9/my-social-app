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
  onOpen?: () => void;
  onClose?: () => void;
  options: DropdownOption[];
  className?: string;
}

const Dropdown = ({ trigger, onOpen, onClose, options, className = "" }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose?.();
    }, 100);
  });

  const handleOptionClick = (e: React.MouseEvent) => (option: DropdownOption) => {
    e.stopPropagation();
    option.onClick();
    setIsOpen(false);
    onClose?.();
  };

  const handleToggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    return isOpen ? onClose?.() : onOpen?.();
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        onClick={handleToggleMenu}
        className="hover:bg-interactive-secondary inline-block cursor-pointer rounded-full p-1 transition-colors"
      >
        {trigger}
      </div>

      {isOpen && options.length && (
        <div className="bg-surface-secondary border-border-subtle min-w-content absolute right-0 z-50 overflow-hidden rounded-md border shadow-md">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={(event) => handleOptionClick(event)(option)}
              className={`text-primary hover:bg-interactive-secondary flex w-full flex-row gap-2 px-4 py-2 text-left text-sm transition-colors ${option.component ? "" : "cursor-pointer"} ${
                option.className || ""
              }`}
            >
              <div className="flex flex-row items-center gap-2">
                {option.icon && <span className="h-4 w-4">{option.icon}</span>}
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
