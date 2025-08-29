document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  const devPlanImg = document.getElementById("development-plan-image");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("image-modal-img");
  const closeBtn = document.querySelector(".image-modal-close");
  if (devPlanImg && modal && modalImg && closeBtn) {
    let scale = 1;
    devPlanImg.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = devPlanImg.src;
      scale = 1;
      modalImg.style.transform = "scale(1)";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    modalImg.addEventListener("wheel", (e) => {
      e.preventDefault();
      scale += e.deltaY * -0.01;
      scale = Math.min(Math.max(1, scale), 5);
      modalImg.style.transform = `scale(${scale})`;
    });
  }
});
