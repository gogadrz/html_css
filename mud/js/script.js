(() => {
  const form = document.querySelector(".form");
  // console.log(form);

  let formInp = document.querySelector(".form__input");
  // let formInp = form.querySelector("input");
  formInp.addEventListener("input", () => {
    if (parseInt(formInp.value) > 10) {
      formInp.value = 10;
      return false;
    } else if (parseInt(formInp.value) < 2 || formInp.value === "") {
      formInp.value = 2;
      return false;
    }
    console.log(formInp.value);
  });
})();
