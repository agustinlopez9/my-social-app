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
    <div className="relative text-white border bg-zinc-700 border-zinc-600 p-4 rounded-sm my-4 mx-2">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2">
          <FaExclamationCircle className="w-6 h-6 text-red-500" />
          <h3 className="font-semibold text-lg">{title || t("common.labels.error")}</h3>
        </div>
        <div>
          {message && <p className="text-zinc-300 mb-2">{message}</p>}
          {error && (
            <p className="text-sm text-zinc-400 font-mono bg-zinc-800 p-2 rounded border border-zinc-600">
              {error.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Error;
