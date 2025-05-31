// marcadores map
const markers = document.querySelectorAll(".marker");

markers.forEach((marker) => {
  marker.addEventListener("click", function (e) {
    e.stopPropagation();

    const markerId = this.getAttribute("data-id");
    const infoBox = document.getElementById(`marker-info-${markerId}`);

    document.querySelectorAll(".marker-info").forEach((box) => {
      box.style.display = "none";
    });

    if (infoBox) {
      const rect = this.getBoundingClientRect();
      infoBox.style.top = `${rect.top}px`;
      infoBox.style.left = `${rect.left + 40}px`;
      infoBox.style.display = "block";
    }
  });
});

// fechar quando clicar fora
document.addEventListener("click", function () {
  document.querySelectorAll(".marker-info").forEach((box) => {
    box.style.display = "none";
  });
});

// não fechar quando clicar dentro
document.querySelectorAll(".marker-info").forEach((box) => {
  box.addEventListener("click", function (e) {
    e.stopPropagation();
  });
});

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    filterBtns.forEach((b) => b.classList.remove("active"));

    this.classList.add("active");

    const filterType = this.textContent.trim().toLowerCase();
  });
});
