import { forwardRef } from "react";

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ error, label, className = "", ...props }, ref) => {

    return (
      <div className="w-full">
        {label && <label className="text-white text-sm mb-1 block">{label}</label>}
        <textarea
          ref={ref}
          className={`w-full bg-zinc-600 text-white rounded-md p-2 min-h-24 resize-none border ${
            error ? "border-red-500" : "border-zinc-600"
          } focus:border-orange-500 focus:outline-none placeholder:text-zinc-400 ${className}`}
          {...props}
        />
        {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
      </div>
    );
  },
);

FormTextArea.displayName = "FormTextArea";

export default FormTextArea;
