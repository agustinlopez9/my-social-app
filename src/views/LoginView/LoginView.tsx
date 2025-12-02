import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useAuth } from "src/context/AuthContext";
import Button from "components/ui/Button";

const LoginView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    navigate("/home");
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="bg-surface-primary border-border-subtle w-full max-w-md rounded-lg border p-8 shadow-lg">
        <h1 className="text-display-lg text-primary mb-2 text-center font-bold">
          <span className="from-brand-600 to-brand-400 bg-linear-to-r bg-clip-text text-transparent">
            Sync
          </span>
          Up!
        </h1>
        <p className="text-secondary mb-8 text-center">{t("loginView.copy.welcome")}</p>
        <Button onClick={handleLogin} variant="primary" size="large" className="w-full">
          {t("common.actions.login")}
        </Button>
      </div>
    </div>
  );
};

export default LoginView;
