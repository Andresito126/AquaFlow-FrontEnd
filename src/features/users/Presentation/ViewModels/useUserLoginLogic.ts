// src/Presentation/ViewModels/useUserLoginLogic.ts
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserLoginViewModel } from "./UserLoginViewModel";

export const useUserLoginLogic = (viewModel: UserLoginViewModel) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await viewModel.doLogin();

    if (success) {
      setShowSuccess(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  return { handleSubmit, showSuccess };
};
