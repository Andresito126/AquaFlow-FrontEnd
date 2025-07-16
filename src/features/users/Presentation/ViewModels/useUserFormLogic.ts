import { useState } from "react";
import { UserViewModel } from "./UserViewModel";

export function useUserFormLogic(viewModel: UserViewModel) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await viewModel.doCreateUser();

    if (viewModel.isSuccess) {
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
  };

  return { handleSubmit, showSuccessMessage };
}
