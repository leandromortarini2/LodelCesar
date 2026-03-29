/* eslint-disable @typescript-eslint/no-explicit-any */
import Swal, { type SweetAlertResult } from "sweetalert2";
interface AlertParams {
  title: string;
  text?: string;
  icon?: "warning" | "error" | "success" | "info" | "question";
  confirmButtonColor?: string;
  confirmButtonText?: string;
  showConfirmButton?: boolean;
  cancelButtonColor?: string;
  cancelButtonText?: string;
  showCancelButton?: boolean;
  allowOutsideClick?: boolean;
}

export default function customeAlert(
  params: AlertParams
): Promise<SweetAlertResult<any>> {
  const {
    title,
    text,
    icon = params.showCancelButton ? "question" : "info",
    confirmButtonColor = "#2A4B9C",
    confirmButtonText = "Aceptar",
    showConfirmButton = true,
    cancelButtonColor = "#C6D3E8",
    cancelButtonText = "Cancelar",
    showCancelButton = false,
    allowOutsideClick = false,
  } = params;

  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showConfirmButton: showConfirmButton,
    confirmButtonText: confirmButtonText,
    confirmButtonColor: confirmButtonColor,
    showCancelButton: showCancelButton,
    cancelButtonText: cancelButtonText,
    cancelButtonColor: cancelButtonColor,
    allowOutsideClick: allowOutsideClick,
    reverseButtons: true,
    customClass: {
      container: "z-50",
    },
  });
}
