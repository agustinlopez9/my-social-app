import { FaEllipsisV, FaPen, FaTrash, FaFlag, FaEyeSlash } from "react-icons/fa";
import Avatar from "components/ui/Avatar";
import Dropdown from "components/ui/Dropdown";
import { getRelativeTimeFromDate } from "utils/utils";

interface PostHeaderProps {
  avatar: string;
  name: string;
  createdAt: string;
}

const PostHeader = ({ avatar, name, createdAt }: PostHeaderProps) => {
  const handleMenuClick = (action: string) => {
    console.log(`${action} clicked`);
  };
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <Avatar
        className="my-2"
        src={avatar}
        title={name}
        subtitle={getRelativeTimeFromDate(createdAt)}
        size="small"
        direction="column"
      />
      <Dropdown
        options={[
          {
            label: "Editar",
            onClick: () => handleMenuClick("edit"),
            icon: <FaPen />,
          },
          {
            label: "Borrar",
            onClick: () => handleMenuClick("delete"),
            icon: <FaTrash />,
          },
          {
            label: "Reportar",
            onClick: () => handleMenuClick("report"),
            icon: <FaFlag />,
          },
          {
            label: "Ocultar",
            onClick: () => handleMenuClick("hide"),
            icon: <FaEyeSlash />,
          },
        ]}
        trigger={
          <FaEllipsisV className="w-3 text-zinc-400 cursor-pointer hover:text-white transition-colors" />
        }
      />
    </div>
  );
};

export default PostHeader;
