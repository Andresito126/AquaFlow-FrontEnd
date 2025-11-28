import "./Crateuser.css";
import ImgRegister from "../../../../../core/assets/icons/login-register/image21.png";
import ImageLogoShort from "../../../../../core/assets/icons/login-register/hori.png";
import { observer } from "mobx-react-lite";
import { UserViewModel } from "../../ViewModels/UserCreateViewModel";
import { useUserFormLogic } from "../../ViewModels/useUserCreateFormLogic";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { LanguageToggleButton } from "../../../../shared/components/generic/LanguageToggleButton";
import { useLanguage } from "../../../../shared/hooks/useLanguage";
import { useTranslation } from "react-i18next";

const viewModel = new UserViewModel();

const CreateUser = observer(() => {
  const { handleSubmit, showSuccessMessage } = useUserFormLogic(viewModel);
  const navigate = useNavigate();

  useEffect(() => {
    if (showSuccessMessage) {
      const timeout = setTimeout(() => {
        navigate("/");
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [showSuccessMessage, navigate]);

    const { language, toggleLanguage } = useLanguage();
    const { t } = useTranslation("common");
  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-left-content">
          <img src={ImgRegister} alt="Registro visual" className="img" />
          <h2>{t("common.pages.register.gretting.welcome")} </h2>
          <p>{t("common.pages.register.gretting.text")} </p>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-logo-wrapper">
          <img src={ImageLogoShort} className="auth-logo" alt="Logo" />
        </div>

        <div className="auth-box">
          {(showSuccessMessage || viewModel.error) && (
            <div
              className={`alert-bar ${
                showSuccessMessage ? "success" : "error"
              }`}
            >
              {showSuccessMessage
                ? t("common.pages.register.registerSucces")
                : viewModel.error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <h2> </h2>

            <label>{t("common.pages.register.name")}</label>
            <input
              type="text"
              value={viewModel.firstName}
              onChange={(e) => viewModel.onChangeFirstName(e.target.value)}
              placeholder="Juan"
            />

            <label>{t("common.pages.register.fatherLastName")} </label>
            <input
              type="text"
              value={viewModel.lastName1}
              onChange={(e) => viewModel.onChangeLastName1(e.target.value)}
              placeholder="Pérez"
            />

            <label>{t("common.pages.register.motherLastName")} </label>
            <input
              type="text"
              value={viewModel.lastName2}
              onChange={(e) => viewModel.onChangeLastName2(e.target.value)}
              placeholder="Gómez"
            />

            <label>{t("common.pages.register.email")}</label>
            <input
              type="email"
              value={viewModel.email}
              onChange={(e) => viewModel.onChangeEmail(e.target.value)}
              placeholder={t("common.pages.register.emailPlaceHolder")}
            />

            <label>{t("common.pages.register.password")}</label>
            <input
              type="password"
              value={viewModel.password}
              onChange={(e) => viewModel.onChangePassword(e.target.value)}
              placeholder="••••••••"
            />

            <label>{t("common.pages.register.confirmP")}</label>
            <input
              type="password"
              value={viewModel.confirmPassword}
              onChange={(e) => viewModel.onChangeConfirmPassword(e.target.value)}
              placeholder="••••••••"
            />

            <button type="submit" disabled={viewModel.isSubmitting}>
              {viewModel.isSubmitting ? t("common.pages.register.") : t("common.pages.register.createAccount")}
            </button>
          </form>

          <p className="register-text">
            {t("common.pages.register.alreadyAccount")} <a href="/">{t("common.pages.register.signin")}</a>
          </p>
        </div>
      </div>
        <LanguageToggleButton language={language} toggleLanguage={toggleLanguage} />
    </div>
  );
});

export default CreateUser;
