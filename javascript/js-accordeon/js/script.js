new Accordion('.accordion', {
  duration: 400,
  // showMultiple: true,
  onOpen: function (currentElement) {
    console.log(currentElement);
  }
});
