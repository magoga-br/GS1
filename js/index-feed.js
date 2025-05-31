const feedTabs = document.querySelectorAll(".feed-tab");

feedTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    
    feedTabs.forEach((t) => t.classList.remove("active"));

    this.classList.add("active");
    const tabType = this.textContent.trim().toLowerCase();
  });
});
