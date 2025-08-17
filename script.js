let burgerMenu = document.querySelector("header .links .burger-menu");
let ulHeader = document.querySelector("header .links ul");
burgerMenu.onclick = () => {
  ulHeader.classList.toggle("active");
}
let autoYear = document
  .querySelector("footer span")
  .before(document.createTextNode(new Date().getFullYear()));
let progressInPage = document.querySelector(".progress-page");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.onscroll = () => {
  progressInPage.style.width = `${
    (document.documentElement.scrollTop * 100) / height
  }%`;
};
