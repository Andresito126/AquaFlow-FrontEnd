import "./Login.css";
import ImgLogin from "../../../../../core/assets/icons/login-register/login.png";
import ImageLogoShort from "../../../../../core/assets/icons/login-register/hori.png";
import { observer } from "mobx-react-lite";
import { UserLoginViewModel } from "../../ViewModels/UserLoginViewModel";
import { useUserLoginLogic } from "../../ViewModels/useUserLoginLogic";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { LanguageToggleButton } from "../../../../shared/components/generic/LanguageToggleButton";
import { useLanguage } from "../../../../shared/hooks/useLanguage";
import { useTranslation } from "react-i18next";

const viewModel = new UserLoginViewModel();

const Login = observer(() => {
  const { handleSubmit, showSuccess } = useUserLoginLogic(viewModel);
  const navigate = useNavigate();

 useEffect(() => {
  if (showSuccess) {
    const timeout = setTimeout(() => {
      const userRole = localStorage.getItem("userRole");

      if (userRole === "Administrator") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }
}, [showSuccess, navigate]);

  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation("common");

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="auth-logo-wrapper-left">
          <img src={ImageLogoShort} className="auth-logo-left" alt="Logo" />
        </div>
        <div className="login-box">
          {(showSuccess || viewModel.error) && (
            <div className={`alert-bar ${showSuccess ? "success" : "error"}`}>
              {showSuccess ? t("common.alerts.logInAlert") : viewModel.error}
            </div>
          )}

          <h2>{t("common.modulesAndButtons.login")}</h2>

          <form onSubmit={handleSubmit}>
            <label>{t("common.pages.login.email")}</label>
            <input
              type="email"
              value={viewModel.email}
              onChange={(e) => viewModel.onChangeEmail(e.target.value)}
              disabled={viewModel.isSubmitting}
              placeholder={t("common.pages.login.emailPlaceHolder")}
            />

            <label>{t("common.pages.login.password")}</label>
            <input
              type="password"
              value={viewModel.password}
              onChange={(e) => viewModel.onChangePassword(e.target.value)}
              disabled={viewModel.isSubmitting}
              placeholder="••••••••"
            />

            <button type="submit" disabled={viewModel.isSubmitting}>
              {viewModel.isSubmitting ? t("common.pages.login.entering") : t("common.pages.login.logInButton")}
            </button>
          </form>

          <div className="divider">
            <span>{t("common.pages.login.logginWith")}</span>
          </div>

          <p className="signup-text">
            {t("common.pages.login.noAccount")} <a href="/registro">{t("common.pages.login.register")}</a>
          </p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-right-content">
          <img src={ImgLogin} alt="Login visual" className="img" />
          <h2>{t("common.pages.login.gretting.welcome")}</h2>
          <p>{t("common.pages.login.gretting.text")}</p>
        </div>
      </div>
      <LanguageToggleButton language={language} toggleLanguage={toggleLanguage} />

    </div>
  );
});

export default Login;
