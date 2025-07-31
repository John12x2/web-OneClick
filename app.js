const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  } 
});

function copyEmail() {
  const email = "mail@oneclicks.my.id";
  navigator.clipboard.writeText(email);
}
