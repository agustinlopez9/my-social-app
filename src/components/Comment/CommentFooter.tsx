import { useTranslation } from "react-i18next";
import { FaReply } from "react-icons/fa";

interface CommentFooterProps {
  handleReply: () => void;
  isReplying: boolean;
}

function CommentFooter({ handleReply, isReplying }: CommentFooterProps) {
  const { t } = useTranslation();

  return (
    <>
      <div className="border-border-default my-2 border-t" />
      <div className="flex flex-row items-center">
        <button
          onClick={handleReply}
          disabled={isReplying}
          className="hover:bg-surface-elevated text-secondary flex cursor-pointer items-center gap-1 rounded-full px-2 py-1 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FaReply className="w-3" />
          <span className="text-body-sm block">{t("comments.actions.reply")}</span>
        </button>
      </div>
    </>
  );
}

export default CommentFooter;
