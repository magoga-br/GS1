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

let zoom = 1;
const mapImage = document.getElementById("map-image");
const markersContainer = document.getElementById("markers-container");
const allMarkers = Array.from(document.querySelectorAll(".marker"));
const mapContainer = document.querySelector(".map-container");

// Armazena as posições originais dos marcadores
document.addEventListener("DOMContentLoaded", function() {
    allMarkers.forEach(marker => {
        const rect = marker.getBoundingClientRect();
        const containerRect = mapContainer.getBoundingClientRect();
        
        // Calcula a posição relativa ao container (em porcentagem)
        const originalLeft = ((rect.left - containerRect.left) / containerRect.width) * 100;
        const originalTop = ((rect.top - containerRect.top) / containerRect.height) * 100;
        
        marker.dataset.originalLeft = originalLeft;
        marker.dataset.originalTop = originalTop;
    });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const allMarkersOnMap = document.querySelectorAll(".map-markers .marker");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedFilter = button.dataset.filter;

    allMarkersOnMap.forEach((marker) => {
      if (
        selectedFilter === "all" ||
        marker.classList.contains(selectedFilter)
      ) {
        marker.style.visibility = "visible";
        marker.style.opacity = "1";
      } else {
        marker.style.visibility = "hidden";
        marker.style.opacity = "0";
      }
    });
  });
});
