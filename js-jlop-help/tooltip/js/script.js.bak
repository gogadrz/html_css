(() => {
  const bodyPos = document.querySelector("body");

  // let sizeViewport = bodyPos.getBoundingClientRect();

  console.log(`width: ${window.screen.width}`);
  console.log(`height: ${window.screen.height}`);

  console.log(`available w: ${window.screen.availWidth}`);
  console.log(`available h: ${window.screen.availHeight}`);

  const popupMargin = 30;
  const popup = document.querySelector(".popup");
  const marker = document.querySelector(".marker");
  console.log(`marker: ${marker.clientY}`);

  const { width, height } = popup.getBoundingClientRect();
  console.log(`ширина popup: ${width}, высота: ${height}`);
  // console.log(bodyPos);

  marker.addEventListener("mouseover", function (event) {
    // let markerCoords = event.currentTarget;

    let xOffset = event.clientX;
    let yOffset = event.clientY;

    let pupupX = xOffset;
    let popupY = yOffset;

    // console.log(`marker: ${markerCoords.clientX}, ${markerCoords.clientY}`);
    console.log(`mouse: (left-${xOffset}, top-${yOffset})`);
    popupY = parseInt(yOffset - height - popupMargin) + "px";
    console.log(popupY);

    popup.style.top = popupY;
  });
})();
