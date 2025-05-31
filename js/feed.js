//scroll
let prevScrollPos = window.pageYOffset;

const sidebar = document.querySelector(".right-sidebar");
const emergency = document.querySelector(".emergency-alerts");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    sidebar.style.top = "70px";
  } else if (prevScrollPos < currentScrollPos) {
    mt = emergency.offsetHeight - 50;
    sidebar.style.top = -mt + "px";
  }

  prevScrollPos = currentScrollPos;
});

//post
const postSubmit = document.querySelector(".post-submit");

postSubmit.addEventListener("click", function () {
  const textarea = document.querySelector(".new-post-content textarea");
  if (textarea.value.trim() !== "") {
    const textUser = textarea.value;
    const newPostHTML = `
      <div class="post-card animated-content">
        <div class="post-header">
          <div class="post-avatar">FM</div>
          <div class="post-meta">
            <h4>Fabrício Magoga</h4>
            <p>@fbrcmgg · Agora · Jundiaí, SP</p>
          </div>
        </div>
        <div class="post-tag tag-heat">
          <i class="fas fa-sun"></i> Calor Extremo
        </div>
        <div class="post-content">
          <p>${textUser}</p>
        </div>
        <img src="" class="post-image">
        <div class="post-actions">
          <button class="action-btn">
            <i class="far fa-heart"></i> 0
          </button>
          <button class="action-btn">
            <i class="far fa-comment"></i> 0
          </button>
          <button class="action-btn">
            <i class="fas fa-share"></i> Compartilhar
          </button>
        </div>
      </div>
    `;

    document
      .querySelector(".feed-cards")
      .insertAdjacentHTML("afterbegin", newPostHTML);
    textarea.value = "";
  } else {
    alert("Por favor, escreva algo antes de publicar.");
  }
});

// like buttons
document.querySelectorAll(".action-btn .fa-heart").forEach((heart) => {
  heart.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.toggle("far");
    this.classList.toggle("fas");
    this.style.color = this.classList.contains("fas") ? "#ff6b6b" : "";

    const countElement = this.parentNode.querySelector("span");
    if (countElement) {
      let count = parseInt(countElement.textContent);
      count = this.classList.contains("fas") ? count + 1 : count - 1;
      countElement.textContent = count;
    }
  });
});
