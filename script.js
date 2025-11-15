// Slide image lists (Using the images you provided - ensure these files are served alongside this page)

document.querySelectorAll("#card").forEach((card) => {
  const guideBtn = card.querySelector("#installation-guide-btn");
  const gudeWindow = card.querySelector("#guide-window");
  const videoEle = gudeWindow.querySelector("video");

  guideBtn.addEventListener("click", (e) => {
    const isOpen = gudeWindow.style.display === "flex";
    gudeWindow.style.display = isOpen ? "none" : "flex";
    e.target.textContent = isOpen
      ? "Open Installation Guide"
      : "Close Installation Guide";

    setTimeout(() => (!isOpen ? videoEle.play() : videoEle.pause()), 500);

    window.scrollTo({
      top: card.offsetTop - 20,
      behavior: "smooth",
    });
  });
});
