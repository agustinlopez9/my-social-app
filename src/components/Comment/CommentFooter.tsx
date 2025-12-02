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
      <div className="border-t border-border-default my-2" />
      <div className="flex flex-row items-center">
        <button
          onClick={handleReply}
          disabled={isReplying}
          className="hover:bg-surface-elevated rounded-full px-2 py-1 cursor-pointer transition-colors flex items-center gap-1 text-sm text-secondary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaReply className="w-3" />
          <span>{t("comments.actions.reply")}</span>
        </button>
      </div>
    </>
  );
}

export default CommentFooter;
