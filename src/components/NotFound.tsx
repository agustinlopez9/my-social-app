import { useTranslation } from "react-i18next";
import { FaExclamationCircle } from "react-icons/fa";

interface NotFoundProps {
  message?: string;
}

const NotFound = ({ message }: NotFoundProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
      <FaExclamationCircle className="text-orange-600 text-6xl mb-4" />
      <h2 className="text-white text-2xl font-bold mb-2">{t("notFound.labels.title")}</h2>
      <p className="text-zinc-400 text-lg text-center max-w-md">
        {message || t("notFound.copy.message")}
      </p>
    </div>
  );
};

export default NotFound;
