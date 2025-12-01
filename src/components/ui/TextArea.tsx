import { useTranslation } from "react-i18next";

interface TextAreaProps {
  name: string;
  placeholder?: string;
}

const TextArea = ({ name, placeholder }: TextAreaProps) => {
  const { t } = useTranslation();
  return (
    <textarea
      className="w-full bg-surface-input text-primary rounded-md p-3 min-h-24 resize-none border border-border-subtle focus:border-border-focus focus:outline-none placeholder:text-placeholder"
      name={name}
      placeholder={placeholder || t("common.copy.textPlaceholder")}
    />
  );
};

export default TextArea;
