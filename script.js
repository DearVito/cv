let w =
    document.documentElement.clientWidth ||
    document.body.clientWidth ||
    window.innerWidth;
const mainBurger = document.querySelector(".eCxtrN"),
  altNavMenu = document.querySelector(".dAwNpJ"),
  mainCloseBurger = document.querySelector(".main-page-close"),
  headerMain = document.querySelector("header.master_page"),
  mainPage = document.querySelector("main.master_page"),
  aNavigate = document.querySelectorAll("a.navigate"),
  aResume = document.querySelector("a.resume");

mainBurger.addEventListener("click", mainBurgerOn);
mainCloseBurger.addEventListener("click", mainBurgerOff);
mainPage.addEventListener("click", mainBurgerOff);

aNavigate.forEach((item) => {
  item.addEventListener("click", mainBurgerOff);
});
aResume.addEventListener("click", mainBurgerOff);

function mainBurgerOn() {
  mainBurger.style.display = "none";
  altNavMenu.style.visibility = "visible";
  mainCloseBurger.style.display = "block";
  headerMain.style.backgroundColor = "rgba(154, 194, 255, 1)";
}

function mainBurgerOff() {
  mainBurger.style.display = "block";
  altNavMenu.style.visibility = "hidden";
  mainCloseBurger.style.display = "none";
  headerMain.style.backgroundColor = "rgba(154, 194, 255, 0.9)";
}
