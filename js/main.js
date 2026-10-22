document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".music-request");
  const trigger = section.querySelector(".music-request__trigger");
  const panel = section.querySelector(".music-request__panel");

  trigger.addEventListener("click", () => {
    const isOpen = trigger.getAttribute("aria-expanded") === "true";

    trigger.setAttribute("aria-expanded", String(!isOpen));
    section.classList.toggle("is-open", !isOpen);

    if (isOpen) {
      panel.setAttribute("hidden", "");
    } else {
      panel.removeAttribute("hidden");
    }
  });
});
