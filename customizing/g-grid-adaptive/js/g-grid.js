(() => {
  window.addEventListener("resize", (evResize) => {
    console.log("resized!");

    if (window.screen.availWidth >= 576) {
      const cols = document.querySelectorAll(".col");
      cols.forEach((item) => {
        // item.classList.remove('col')
        item.classList.add("col-6");
      });
    }
  });
})();
