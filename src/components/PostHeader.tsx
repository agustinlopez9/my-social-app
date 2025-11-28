import { BsThreeDotsVertical } from "react-icons/bs";
import Avatar from "./ui/Avatar";
import Dropdown from "./ui/Dropdown";

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
        alt="Profile logo"
        title={name}
        subtitle={new Date(createdAt).toLocaleString()}
      />
      <Dropdown
        options={[
          {
            label: "Reportar",
            onClick: () => console.log("Reportar clicked"),
          },
          {
            label: "Ocultar",
            onClick: () => console.log("Ocultar clicked"),
          },
        ]}
        trigger={
          <BsThreeDotsVertical className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-white transition-all duration-200" />
        }
      />
    </div>
  );
};

export default PostHeader;
