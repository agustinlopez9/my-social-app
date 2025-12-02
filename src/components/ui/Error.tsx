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
    <div className="relative text-primary border bg-surface-primary border-border-subtle p-4 rounded-sm my-4 mx-2">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2">
          <FaExclamationCircle className="w-6 h-6 text-error" />
          <h3 className="font-semibold text-heading-sm">{title || t("common.labels.error")}</h3>
        </div>
        <div>
          {message && <p className="text-secondary mb-2">{message}</p>}
          {error && (
            <p className="text-body-sm text-tertiary font-mono bg-surface-secondary p-2 rounded border border-border-subtle">
              {error.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Error;
