let burgerMenu = document.querySelector("header .links .burger-menu");
let ulHeader = document.querySelector("header .links ul");
window.addEventListener("click", (e) => {
  if (e.target === burgerMenu) {
    ulHeader.classList.toggle("active");
  } else {
    if (ulHeader.classList.contains("active"))
      ulHeader.classList.remove("active");
  }
});
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
