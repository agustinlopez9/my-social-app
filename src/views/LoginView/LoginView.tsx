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
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-surface-primary rounded-lg p-8 border border-border-subtle shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-primary mb-2 text-center">
          <span className="bg-linear-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
            Sync
          </span>
          Up!
        </h1>
        <p className="text-secondary text-center mb-8">{t("loginView.copy.welcome")}</p>
        <Button onClick={handleLogin} variant="primary" size="large" className="w-full">
          {t("common.actions.login")}
        </Button>
      </div>
    </div>
  );
};

export default LoginView;
