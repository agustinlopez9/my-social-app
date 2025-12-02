import { useTranslation } from "react-i18next";
import { FaExclamationCircle } from "react-icons/fa";

interface ErrorProps {
  title?: string;
  message?: string;
  error?: Error | { message: string };
}

const Error = ({ title, message, error }: ErrorProps) => {
  const { t } = useTranslation();

  return (
    <div className="text-primary bg-surface-primary border-border-subtle relative mx-2 my-4 rounded-sm border p-4">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2">
          <FaExclamationCircle className="text-error h-6 w-6" />
          <h3 className="text-heading-sm font-semibold">{title || t("common.labels.error")}</h3>
        </div>
        <div>
          {message && <p className="text-secondary mb-2">{message}</p>}
          {error && (
            <p className="text-body-sm text-tertiary bg-surface-secondary border-border-subtle rounded border p-2 font-mono">
              {error.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Error;
