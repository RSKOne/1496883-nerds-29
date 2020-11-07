const popupOpen = document.querySelector(".location__contact-button");
const popupClose = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const form = document.querySelector("form");
const name = document.querySelector("[name=name]");
const email = document.querySelector("[name=e-mail]");
const text = document.querySelector("[name=textarea]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
};

popupOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup__show");

  if (storage) {
  name.value = storage;
  email.value = storage;
  text.focus();
  } else {
    name.focus();
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup__show");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.add("popup__error")
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup__show")) {
      evt.preventDefault();
      popup.classList.remove("popup__show");
    }
  }
});