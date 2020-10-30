const buttonSearch = document.querySelector(".search-hotel");
const form = document.querySelector(".appointment-form");
const dateOn = document.querySelector(".date-on");
const dateOff = document.querySelector(".date-off");
const peopleOld = document.querySelector(".people-old");
const peopleChild = document.querySelector(".people-child");

buttonSearch.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.toggle("appointment-form-non-active");
    form.classList.remove("modal-error");

});

form.addEventListener("submit", function (evt) {
      if (!dateOn.value || !dateOff.value || !peopleOld.value || !peopleChild.value) {
        evt.preventDefault();
          form.classList.remove("modal-error");
          form.offsetWidth = form.offsetWidth;
          form.classList.add("modal-error");

    }});
