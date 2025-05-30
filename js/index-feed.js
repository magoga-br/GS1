const feedTabs = document.querySelectorAll(".feed-tab");

feedTabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active class from all tabs
    feedTabs.forEach((t) => t.classList.remove("active"));

    this.classList.add("active");
    const tabType = this.textContent.trim().toLowerCase();
  });
});
