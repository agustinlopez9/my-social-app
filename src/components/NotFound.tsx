import { useTranslation } from "react-i18next";
import { FaExclamationCircle } from "react-icons/fa";

interface NotFoundProps {
  message?: string;
}

const NotFound = ({ message }: NotFoundProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
      <FaExclamationCircle className="text-brand text-6xl mb-4" />
      <h2 className="text-primary text-heading-lg font-bold mb-2">{t("notFound.labels.title")}</h2>
      <p className="text-tertiary text-body-lg text-center max-w-md">
        {message || t("notFound.copy.message")}
      </p>
    </div>
  );
};

export default NotFound;
