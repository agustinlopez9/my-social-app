import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outlined";
type ButtonSize = "small" | "medium" | "large";
type IconPosition = "start" | "end";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  iconPosition?: IconPosition;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const Button = ({
  icon,
  iconPosition,
  variant = "primary",
  size = "medium",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button className={`flex ${iconPosition === "start" ? "flex-row" : "flex-row-reverse"} btn btn-${variant} btn-${size} ${className}`} {...props}>
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
