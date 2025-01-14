export function openSnackbar(text) {
    const snackbar = document.querySelector(".snackbar");
    snackbar.innerHTML = text;
    snackbar.classList.add("open");
}