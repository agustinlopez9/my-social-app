import { useTranslation } from "react-i18next";
import Button from "./Button";

interface DeleteConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  loading?: boolean;
}

const DeleteConfirmationDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  loading = false,
}: DeleteConfirmationDialogProps) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

      <div className="bg-surface-primary border-border-subtle relative z-10 w-full max-w-md rounded-lg border p-6 shadow-lg">
        <h2 className="text-primary text-heading-3 mb-4">
          {title || t("common.dialog.deleteConfirmation.title")}
        </h2>
        <p className="text-secondary text-body mb-6">
          {message || t("common.dialog.deleteConfirmation.message")}
        </p>

        <div className="flex justify-end gap-3">
          <Button variant="outlined" onClick={onClose} disabled={loading}>
            {t("common.actions.cancel")}
          </Button>
          <Button variant="primary" onClick={handleConfirm} loading={loading} disabled={loading}>
            {t("common.actions.delete")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationDialog;
