import { forwardRef } from "react";

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ error, label, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="text-primary text-sm mb-1 block">{label}</label>}
        <textarea
          ref={ref}
          className={`w-full bg-surface-input text-primary rounded-md p-2 min-h-24 resize-none border ${
            error ? "border-error" : "border-border-subtle focus:border-border-focus"
          } focus:outline-none placeholder:text-placeholder ${className}`}
          {...props}
        />
        {error && <span className="text-error text-sm mt-1 block">{error}</span>}
      </div>
    );
  },
);

FormTextArea.displayName = "FormTextArea";

export default FormTextArea;
