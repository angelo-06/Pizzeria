
(function () {
  "use strict";
  /* 1. Validación de formularios Bootstrap */
  function initFormValidation() {
    const forms = document.querySelectorAll(".needs-validation");
    forms.forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  }

  /* pasa el nombre y el precio de la pizza seleccionada */
  function initCustomizeModal() {
    const modalEl = document.getElementById("modalPersonalizar");
    if (!modalEl) return;

    modalEl.addEventListener("show.bs.modal", (event) => {
      const trigger = event.relatedTarget;
      if (!trigger) return;

      const pizzaName = trigger.getAttribute("data-pizza-name") || "Pizza";
      const pizzaPrice = trigger.getAttribute("data-pizza-price") || "";

      const nameTarget = modalEl.querySelector("[data-modal-pizza-name]");
      const priceTarget = modalEl.querySelector("[data-modal-pizza-price]");

      if (nameTarget) nameTarget.textContent = pizzaName;
      if (priceTarget) priceTarget.textContent = pizzaPrice;
    });
  }

  /* 3. Filtro de categorías */
  function initCategoryFilter() {
    const pills = document.querySelectorAll("[data-filter-category]");
    const cards = document.querySelectorAll("[data-pizza-category]");
    if (!pills.length || !cards.length) return;

    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        pills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");

        const category = pill.getAttribute("data-filter-category");

        cards.forEach((card) => {
          const cardCategory = card.getAttribute("data-pizza-category");
          const show = category === "todas" || category === cardCategory;
          card.closest(".col").classList.toggle("d-none", !show);
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initFormValidation();
    initCustomizeModal();
    initCategoryFilter();
  });
})();
