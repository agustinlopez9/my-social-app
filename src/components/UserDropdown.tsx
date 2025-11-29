import Avatar from "./ui/Avatar";
import Dropdown, { type DropdownOption } from "./ui/Dropdown";
import { FaGear, FaArrowRightToBracket } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

interface UserDropdownProps {
  avatar?: string;
  name: string;
}

const profileOptions: DropdownOption[] = [
  {
    label: "Perfil",
    onClick: () => console.log("Perfil clicked"),
    icon: <FaUser />,
  },
  {
    label: "Configuración",
    onClick: () => console.log("Configuración clicked"),
    icon: <FaGear />,
  },
  {
    label: "Cerrar sesión",
    onClick: () => console.log("Cerrar sesión clicked"),
    icon: <FaArrowRightToBracket />,
  },
]

const UserDropdown = ({ avatar, name }: UserDropdownProps) => {
  return (
    <Dropdown
      trigger={
        <Avatar
          src={avatar}
          alt={name}
          size="small"
        />
      }
      options={profileOptions}
    />
  );
};

export default UserDropdown;
