export function openModal(...args) {
    const backdrop = document.querySelector(".backdrop");
    const modal = document.querySelector(".backdrop .modal .vbox");
    modal.innerHTML = null;
    for (var i=0; i<args.length; i++) {
        modal.appendChild(args[i]);
    }
    backdrop.classList.add("open");
}