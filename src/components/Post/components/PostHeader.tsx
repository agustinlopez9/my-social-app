import { FaEllipsisV, FaPen, FaTrash, FaFlag, FaEyeSlash } from "react-icons/fa";
import { usePostContext } from "../context";
import Avatar from "components/ui/Avatar";
import Dropdown from "components/ui/Dropdown";
import { getRelativeTimeFromDate } from "utils/utils";

interface PostHeaderProps {
  postId: string;
  avatar: string;
  name: string;
  createdAt: string;
}

const PostHeader = ({ postId, avatar, name, createdAt }: PostHeaderProps) => {
  const { setIsEditing } = usePostContext();
  const handleMenuClick = (action: string) => {
    console.log(`${action} clicked`);
  };

  const handleDelete = () => {
    console.log("Delete action triggered", postId);
  };

  // TODO: Hide EDIT and DELETE options for non-author users, show REPORT and HIDE instead
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
            onClick: () => setIsEditing(true),
            icon: <FaPen />,
          },
          {
            label: "Borrar",
            onClick: () => handleDelete(),
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
          <FaEllipsisV className="w-3 text-tertiary cursor-pointer hover:text-primary transition-colors" />
        }
      />
    </div>
  );
};

export default PostHeader;
