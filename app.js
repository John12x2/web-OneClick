const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});

function copyEmail() {
  const email = "muhammadalfianarya@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const msg = document.getElementById("copy-confirm");
    msg.classList.add("show");

    setTimeout(() => {
      msg.classList.remove("show");
    }, 1500);
  });
}
