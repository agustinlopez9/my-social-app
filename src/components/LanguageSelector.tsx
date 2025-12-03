import { useTranslation } from "react-i18next";
import Select from "./ui/Select";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languageOptions = [
    { value: "en", name: "EN" },
    { value: "es", name: "ES" },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  // Extract base language code (e.g., "es" from "es-ES")
  const currentLanguage = i18n.language.split("-")[0];

  return (
    <Select options={languageOptions} value={currentLanguage} onChange={handleLanguageChange} />
  );
};

export default LanguageSelector;
