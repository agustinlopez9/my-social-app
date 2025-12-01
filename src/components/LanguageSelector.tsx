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

  return <Select options={languageOptions} value={i18n.language} onChange={handleLanguageChange} />;
};

export default LanguageSelector;
