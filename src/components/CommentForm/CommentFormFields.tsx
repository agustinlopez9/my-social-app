import { useTranslation } from "react-i18next";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import FormTextArea from "components/formComponents/FormTextArea";
import Button from "components/ui/Button";
import type { CommentFormData } from "./types";

interface CommentFormFieldsProps {
  register: UseFormRegister<CommentFormData>;
  errors: FieldErrors<CommentFormData>;
  handleCancel?: () => void;
  isSubmittingOrPending?: boolean;
}

const CommentFormFields = ({
  register,
  errors,
  handleCancel,
  isSubmittingOrPending,
}: CommentFormFieldsProps) => {
  const { t } = useTranslation();

  return (
    <>
      <FormTextArea
        {...register("content")}
        placeholder={t("comments.labels.placeholder")}
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

export default CommentFormFields;
