import { useTranslation } from "react-i18next";
import Button from "./ui/Button";
import TextArea from "./ui/TextArea";

const NewPost = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-zinc-700 rounded-sm p-4 border border-zinc-600 m-2 mb-8">
      <p className="text-white font-semibold mb-3">{t("post.labels.createTitle")}</p>
      <TextArea name="post" placeholder={t("post.labels.placeholder")} />
      <div className="flex justify-end mt-3">
        <Button>{t("common.actions.publish")}</Button>
      </div>
    </div>
  );
};

export default NewPost;
