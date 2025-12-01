import { forwardRef } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ error, label, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="text-white text-sm mb-1 block">{label}</label>}
        <input
          ref={ref}
          className={`w-full bg-zinc-600 text-white rounded-md p-2 border ${
            error ? "border-red-500" : "border-zinc-600"
          } focus:border-orange-500 focus:outline-none placeholder:text-zinc-400 ${className}`}
          {...props}
        />
        {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

export default FormInput;
