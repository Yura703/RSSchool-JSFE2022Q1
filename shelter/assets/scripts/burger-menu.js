const MENU_BTN = document.querySelector(".menu-btn");
const MENU_BODY = document.querySelector(".menu-body");
const HREF = document.querySelectorAll(".menu-list>li>a");
const LOGO = document.querySelector(".header__logo>h1>a");
const HDR_TEXT = document.querySelector(".header__logo>div");
const PETS_LOGO = document.querySelector(".pets-logo");
const PETS_TEXT = document.querySelector(".pets-text");
const HREF_LOGO = document.querySelector(".menu-content>div>h1>a");

MENU_BTN.addEventListener("click", (e) => {
  //MENU_BTN.classList.remove("menu-btn-click");
  MENU_BTN.classList.toggle("active");
  MENU_BODY.classList.toggle("active");
  //MENU_BTN.classList.toggle("menu-btn-click");
  if (MENU_BODY.classList.contains("active")) {
    LOGO.style.color = "#F1CDB3";
    HDR_TEXT.style.color = "#FFFFFF";
    document.querySelector(".body").style.overflow = "hidden";
    document.querySelector(".header__logo").style.display = "none";
  } else {
    //MENU_BTN.classList.add("menu-btn-click");
    document.querySelector(".body").style.overflow = "visible";
    document.querySelector(".header__logo").style.display = "flex";
    if (PETS_LOGO) document.querySelector(".pets-logo").style.color = "#545454";
    if (PETS_TEXT) document.querySelector(".pets-text").style.color = "#292929";
  }
});

// MENU_BTN.addEventListener("transitionend", () => {
//   MENU_BTN.classList.remove("menu-btn-click");
// });

HREF.forEach((element) => {
  element.addEventListener("click", () => {
    MENU_BTN.classList.remove("active");
    MENU_BODY.classList.remove("active");
    document.querySelector(".body").style.overflow = "visible";
    document.querySelector(".header__logo").style.display = "flex";
    if (PETS_LOGO) document.querySelector(".pets-logo").style.color = "#545454";
    if (PETS_TEXT) document.querySelector(".pets-text").style.color = "#292929";
  });
  // element.addEventListener("click", () => {
  //   MENU_BTN.classList.remove("active");
  //   MENU_BODY.classList.remove("active");
  // });
});

HREF_LOGO.addEventListener("click", () => {
  MENU_BTN.classList.remove("active");
  MENU_BODY.classList.remove("active");
  document.querySelector(".body").style.overflow = "visible";
  document.querySelector(".header__logo").style.display = "flex";
  if (PETS_LOGO) document.querySelector(".pets-logo").style.color = "#545454";
  if (PETS_TEXT) document.querySelector(".pets-text").style.color = "#292929";
});

MENU_BODY.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-body")) {
    MENU_BTN.classList.toggle("active");
    MENU_BODY.classList.toggle("active");
    //MENU_BTN.classList.toggle("menu-btn-click");
    if (MENU_BODY.classList.contains("active")) {
      LOGO.style.color = "#F1CDB3";
      HDR_TEXT.style.color = "#FFFFFF";
      document.querySelector(".body").style.overflow = "hidden";
      document.querySelector(".header__logo").style.display = "none";
    } else {
      //MENU_BTN.classList.add("menu-btn-click");
      document.querySelector(".body").style.overflow = "visible";
      document.querySelector(".header__logo").style.display = "flex";
      if (PETS_LOGO)
        document.querySelector(".pets-logo").style.color = "#545454";
      if (PETS_TEXT)
        document.querySelector(".pets-text").style.color = "#292929";
    }
  }
});
