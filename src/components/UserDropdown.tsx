import { useTranslation } from "react-i18next";
import Avatar from "./ui/Avatar";
import Dropdown, { type DropdownOption } from "./ui/Dropdown";
import { FaGear, FaArrowRightToBracket, FaLanguage } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import LanguageSelector from "./LanguageSelector";

interface UserDropdownProps {
  avatar?: string;
  name: string;
}

const UserDropdown = ({ avatar, name }: UserDropdownProps) => {
  const { t } = useTranslation();

  const profileOptions: DropdownOption[] = [
    {
      label: t("userMenu.labels.profile"),
      onClick: () => console.log("Profile clicked"),
      icon: <FaUser />,
    },
    {
      label: t("userMenu.labels.settings"),
      onClick: () => console.log("Settings clicked"),
      icon: <FaGear />,
    },
    {
      label: t("userMenu.labels.language"),
      onClick: () => {},
      icon: <FaLanguage />,
      component: <LanguageSelector />,
    },
    {
      label: t("userMenu.labels.logout"),
      onClick: () => console.log("Logout clicked"),
      icon: <FaArrowRightToBracket />,
    },
  ];

  return (
    <Dropdown trigger={<Avatar src={avatar} alt={name} size="small" />} options={profileOptions} />
  );
};

export default UserDropdown;
