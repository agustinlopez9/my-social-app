import { useTranslation } from "react-i18next";
import { FaExclamationCircle } from "react-icons/fa";

interface NotFoundProps {
  message?: string;
}

const NotFound = ({ message }: NotFoundProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center p-8">
      <FaExclamationCircle className="text-brand mb-4 text-6xl" />
      <h2 className="text-primary text-heading-lg mb-2 font-bold">{t("notFound.labels.title")}</h2>
      <p className="text-tertiary text-body-lg max-w-md text-center">
        {message || t("notFound.copy.message")}
      </p>
    </div>
  );
};

export default NotFound;
