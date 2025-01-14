export function openSnackbar(text) {
    const snackbar = document.querySelector(".snackbar");
    const snackbarSpan = document.querySelector(".snackbar .span");
    snackbarSpan.textContent = text;
    snackbar.classList.add("open");
}