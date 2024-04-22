import Swal from 'sweetalert2';

export function useSweetAlert() {
  const fireSweetAlertSuccess = (title, timer = 2000) => {
    Swal.fire({ title, icon: 'success', timer, showConfirmButton: false });
  };

  const fireSweetAlertInfo = (title, timer = 2000) => {
    Swal.fire({ title, icon: 'info', timer, showConfirmButton: false });
  };

  const fireSweetAlertError = (title, timer = 2000) => {
    Swal.fire({ title, icon: 'error', timer, showConfirmButton: false });
  };

  return { fireSweetAlertSuccess, fireSweetAlertInfo, fireSweetAlertError };
}
