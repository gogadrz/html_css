(() => {
  const markerDistance = 10;
  const horizontalMargins = 20;
  const minVerticalOffset = 10;

  const markers = document.querySelectorAll(".tooltip__marker");
  markers.forEach((marker) => {
    // mouseout -------------------------------------------------
    marker.addEventListener("mouseout", (mouseOutEvent) => {
      const marker = mouseOutEvent.currentTarget;
      const popup = mouseOutEvent.currentTarget.nextElementSibling;
      popup.classList.remove("tooltip__popup--show");
      marker.classList.remove("tooltip__marker--hover");
    });

    // wheel ----------------------------------------------------
    marker.addEventListener("wheel", (wheelEvent) => {
      const marker = wheelEvent.currentTarget;
      const popup = wheelEvent.currentTarget.nextElementSibling;
      console.log(popup);
      popup.classList.remove("tooltip__popup--show");
      marker.classList.remove("tooltip__marker--hover");
    });

    // mouseover ------------------------------------------------
    marker.addEventListener("mouseover", (ev) => {
      const marker = ev.currentTarget;
      const popup = ev.currentTarget.nextElementSibling;
      const popupMaxWidth = window.screen.availWidth - horizontalMargins * 2;
      const screenWidth = window.screen.availWidth;

      let markerCoords = marker.getBoundingClientRect();
      let popupCoords = popup.getBoundingClientRect();

      let popupWidth = popupCoords.width;

      // Y
      let popupY = markerCoords.top - popupCoords.height - markerDistance;

      if (popupY < minVerticalOffset) {
        popupY = markerCoords.bottom + markerDistance;
      }

      // X
      // если требуется - уменьшим ширину popup
      if (popupWidth > popupMaxWidth) {
        popupWidth = popupMaxWidth;
      }
      console.log("--------------------");
      console.log(`максимальная ширина popup: ${popupMaxWidth}`);
      console.log(`ширина popup: ${popupWidth}`);

      // установить X
      let popupX = markerCoords.left - popupWidth / 2;
      console.log(`отступ слева: ${popupX} `);
      if (popupX < horizontalMargins) {
        popupX = horizontalMargins;
      }
      console.log(`отсутп после корректировки: ${popupX}`);

      if (popupX + popupWidth > screenWidth - horizontalMargins) {
        popupX = screenWidth - popupWidth - horizontalMargins;
      }
      console.log(`отступ после проверки на выход из диапазона: ${popupX}`);
      console.log(`и ширина: ${popupWidth}`);

      popup.style['left'] = popupX + "px";
      popup.style['top'] = popupY + "px";
      popup.style['max-width'] = popupWidth + "px";

      popup.classList.add("tooltip__popup--show");
      marker.classList.add("tooltip__marker--hover");
    });
  });
})();
