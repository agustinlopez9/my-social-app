type RadioGroupVariant = "primary" | "secondary" | "outlined";
type RadioGroupSize = "small" | "medium" | "large";

interface RadioGroupItemProps {
  label: string;
  value: string;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
  variant?: RadioGroupVariant;
  size?: RadioGroupSize;
  className?: string;
}

const RadioGroupItem = ({
  label,
  value,
  name,
  checked = false,
  onChange,
  variant = "secondary",
  size = "medium",
  className = "",
}: RadioGroupItemProps) => {
  const handleChange = () => {
    onChange?.(value);
  };

  return (
    <label
      className={`radio radio-${variant} radio-${size} ${
        checked ? `radio-${variant}-selected` : ""
      } ${className}`}
    >
      <input
        type="radio"
        name={name || label}
        value={value}
        checked={checked}
        onChange={handleChange}
        className="sr-only"
      />
      <span>{label}</span>
    </label>
  );
};

export default RadioGroupItem;
