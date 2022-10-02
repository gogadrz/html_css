(() => {
  // const marker = document.querySelector(".marker");

  // marker.addEventListener("mouseover", () => {
  //   const popup = document.querySelector(".popup");

  //   const popupCoords = popup.getBoundingClientRect();
  //   const markerCoords = marker.getBoundingClientRect();

  //   const popupMargin = 30;

  //   let popupX = window.screen.availWidth / 2 - popupCoords.width / 2 + "px";
  //   let popupY = markerCoords.top - popupCoords.height - popupMargin;

  //   if (popupY > 5) {
  //     popupY += "px";
  //   } else {
  //     popupY = markerCoords.top + popupMargin + "px";
  //   }

  //   console.log(`marker(l: ${markerCoords.left}, t: ${markerCoords.top})`);
  //   console.log(`popup(w: ${popupCoords.width}, h: ${popupCoords.height})`);

  //   console.log(`new y = ${popupY}`);

  //   popup.style.left = popupX;
  //   popup.style.top = popupY;
  // });

  // ===========================================

  // const markers = document.querySelectorAll(".marker");
  // markers.forEach(function (item) {
  //   // console.log(item);

  //   item.addEventListener("mouseover", function (ev) {
  //     let curMarker = ev.path[0].dataset.target;
  //     let curPopup = null;

  //     // console.log(ev.path[0].dataset);
  //     let popups = document.querySelectorAll(".popup");
  //     popups.forEach(function (popupItem) {
  //       if (popupItem.dataset.target === curMarker) {
  //         curPopup = popupItem;
  //         console.log(curPopup.dataset);
  //       }
  //     });

  //     console.log(`marker target: ${curMarker}`);
  //     console.log(`popup target: ${curPopup}`);

  //     // curPopup.style.top = ev.top;
  //   });
  // });
  const markerMargin = 30;
  const markers = document.querySelectorAll(".marker");
  markers.forEach((iMarker) => {
    iMarker.addEventListener("mouseover", (ev) => {
      let path = ev.currentTarget.getAttribute("data-path");
      let markerCoords = ev.currentTarget.getBoundingClientRect();

      let popup = document.querySelector(`[data-target="${path}"]`);
      let popupCoords = popup.getBoundingClientRect();

      let popupY = markerCoords.top - popupCoords.height - markerMargin;

      if (popupY > 5) {
        popupY += "px";
      } else {
        popupY = markerCoords.bottom + markerMargin + "px";
      }

      let popupX = window.screen.availWidth / 2 - popupCoords.width / 2 + "px";

      popup.style.left = popupX;
      popup.style.top = popupY;
    });
  });
})();
