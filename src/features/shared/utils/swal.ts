import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SweetAlert = withReactContent(Swal);

export const showSuccessAlert = (message: string) =>
  SweetAlert.fire({
    icon: "success",
    title: "Éxito",
    text: message,
    confirmButtonColor: "#1c709a",
  });

export const showErrorAlert = (message: string) =>
  SweetAlert.fire({
    icon: "error",
    title: "Error",
    text: message,
    confirmButtonColor: "#d33",
  });

export const showConfirmationAlert = async (
  message: string,
  confirmTextLanguage: string,
  confirmText = "Sí, continuar"
): Promise<boolean> => {
  const result = await SweetAlert.fire({
    title: confirmTextLanguage,
    text: message,
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#1c709a",
    cancelButtonColor: "#999",
    confirmButtonText: confirmText,
  });

  return result.isConfirmed;
};
