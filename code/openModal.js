export function openModal(...args) {
    const backdrop = document.querySelector(".modal");
    const modal = document.querySelector(".modal .modal-content .vbox");
    modal.innerHTML = null;
    for (var i=0; i<args.length; i++) {
        modal.appendChild(args[i]);
    }
    backdrop.classList.add("open");
}