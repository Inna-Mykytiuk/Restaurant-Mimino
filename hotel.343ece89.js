!function(){var e={openModalBtn:document.querySelector("[data-modal-price-open]"),closeModalBtn:document.querySelector("[data-modal-price-close]"),openModalBtn1:document.querySelector("[data-modal-price-1-open]"),openModalBtn2:document.querySelector("[data-modal-price-3p-open]"),openModalBtn3:document.querySelector("[data-modal-price-2p-open]"),modal:document.querySelector("[data-modal-price]")};function o(o){var t=e.modal.children[0].children[1].children[1];o.target===e.openModalBtn&&(t.textContent="Двомісний люкс"),o.target===e.openModalBtn1&&(t.textContent="Двомісний люкс"),o.target===e.openModalBtn3&&(t.textContent="Двомісний номер"),o.target===e.openModalBtn2&&(t.textContent="Трьохісний номер"),e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open")}function t(o){o.target===e.modal&&(e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("modal-open"))}var n;n=e,console.log(n),console.log(123),n.openModalBtn&&n.openModalBtn.addEventListener("click",o),n.openModalBtn1&&n.openModalBtn1.addEventListener("click",o),n.openModalBtn2&&n.openModalBtn2.addEventListener("click",o),n.openModalBtn3&&n.openModalBtn3.addEventListener("click",o),n.closeModalBtn&&n.closeModalBtn.addEventListener("click",o),document.addEventListener("click",t)}();
//# sourceMappingURL=hotel.343ece89.js.map
