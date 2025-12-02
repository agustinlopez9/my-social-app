import { useTranslation } from "react-i18next";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import FormInput from "components/formComponents/FormInput";
import FormTextArea from "components/formComponents/FormTextArea";
import Button from "components/ui/Button";
import type { PostFormData } from "./types";

interface PostFormFieldsProps {
  register: UseFormRegister<PostFormData>;
  errors: FieldErrors<PostFormData>;
  handleCancel?: () => void;
  isSubmittingOrPending?: boolean;
}

const PostFormFields = ({
  register,
  errors,
  handleCancel,
  isSubmittingOrPending,
}: PostFormFieldsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <FormInput
        {...register("title")}
        placeholder={t("post.labels.titlePlaceholder")}
        error={errors.title?.message ? t(errors.title.message) : undefined}
      />
      <FormTextArea
        {...register("content")}
        placeholder={t("post.labels.placeholder")}
        error={errors.content?.message ? t(errors.content.message) : undefined}
      />
      <div className="flex justify-end gap-2">
        {handleCancel && (
          <Button
            type="button"
            variant="outlined"
            disabled={isSubmittingOrPending}
            onClick={handleCancel}
          >
            {t("common.actions.cancel")}
          </Button>
        )}
        <Button type="submit" variant="primary" disabled={isSubmittingOrPending}>
          {handleCancel ? t("common.actions.save") : t("common.actions.publish")}
        </Button>
      </div>
    </>
  );
};

export default PostFormFields;
