// const markerMargin = 30;
//   const markers = document.querySelectorAll(".marker");
//   markers.forEach((iMarker) => {
//     iMarker.addEventListener("mouseover", (ev) => {
//       let path = ev.currentTarget.getAttribute("data-path");
//       let markerCoords = ev.currentTarget.getBoundingClientRect();

//       let popup = document.querySelector(`[data-target="${path}"]`);
//       let popupCoords = popup.getBoundingClientRect();

//       let popupY = markerCoords.top - popupCoords.height - markerMargin;

//       if (popupY > 5) {
//         popupY += "px";
//       } else {
//         popupY = markerCoords.bottom + markerMargin + "px";
//       }

//       let popupX = window.screen.availWidth / 2 - popupCoords.width / 2 + "px";

//       popup.style.left = popupX;
//       popup.style.top = popupY;
//     });
//   });
(() => {
  const markerMargin = 30;
  const markers = document.querySelectorAll(".marker");
  markers.forEach((marker) => {
    marker.addEventListener("mouseover", (ev) => {
      const marker = ev.currentTarget;
      const popup = ev.currentTarget.nextElementSibling;

      let markerCoords = marker.getBoundingClientRect();
      let popupCoords = popup.getBoundingClientRect();

      let popupY = markerCoords.top - popupCoords.height - markerMargin;
      if (popupY > 5) {
        popupY += "px";
      } else {
        popupY = markerCoords.bottom + markerMargin + "px";
      }

      const popupX =
        window.screen.availWidth / 2 - popupCoords.width / 2 + "px";

      popup.style.left = popupX;
      popup.style.top = popupY;

      // console.log(`popup y - ${popupY}`);
      // console.log(marker);
      // console.log(popup);
    });
  });
})();
