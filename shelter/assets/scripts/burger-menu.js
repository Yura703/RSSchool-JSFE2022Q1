const MENU_BTN = document.querySelector(".menu-btn");
const MENU_BODY = document.querySelector(".menu-body");
const HREF = document.querySelectorAll(".menu-list>li>a");
const LOGO = document.querySelector(".header__logo>h1>a");
const HDR_TEXT = document.querySelector(".header__logo>div");

MENU_BTN.addEventListener("click", (e) => {
  MENU_BTN.classList.toggle("active");
  MENU_BODY.classList.toggle("active");
  if (MENU_BODY.classList.contains("active")) {
    LOGO.style.color = "#F1CDB3";
    HDR_TEXT.style.color = "#FFFFFF";
  } else {
    document.querySelector(".pets-logo").style.color = "#545454";
    document.querySelector(".pets-text").style.color = "#292929";
  }
});

HREF.forEach((element) => {
  element.addEventListener("click", () => {
    MENU_BTN.classList.remove("active");
    MENU_BODY.classList.remove("active");
  });
  element.addEventListener("click", () => {
    MENU_BTN.classList.remove("active");
    MENU_BODY.classList.remove("active");
  });
});
