import { FaEllipsisV, FaPen, FaTrash, FaFlag, FaEyeSlash } from "react-icons/fa";
import Avatar from "components/ui/Avatar";
import Dropdown from "components/ui/Dropdown";
import { getRelativeTimeFromDate } from "utils";

interface PostHeaderProps {
  avatar: string;
  name: string;
  createdAt: string;
}

const PostHeader = ({ avatar, name, createdAt }: PostHeaderProps) => {
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
            onClick: () => console.log("Editar clicked"),
            icon: <FaPen />,
          },
          {
            label: "Borrar",
            onClick: () => console.log("Borrar clicked"),
            icon: <FaTrash />,
          },
          {
            label: "Reportar",
            onClick: () => console.log("Reportar clicked"),
            icon: <FaFlag />,
          },
          {
            label: "Ocultar",
            onClick: () => console.log("Ocultar clicked"),
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
