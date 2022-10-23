// JS By - Rehan
setTimeout(() => {
  const loadingScreen = document.getElementById("loadingCenter");

  loadingScreen.style.displays = "none";
}, 1000);

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show')
//     } else{
//       entry.target.classList.remove('show')
//     }
//   })
// })

// const hiddenElements = document.querySelector(".hidden")
// hiddenElements.forEach((el) => observer.observe(el))

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  const text = document.querySelector(".colonizing");
  if (scroll > 500) {
    text.classList.add("show");
    text.classList.remove("hidden");
  } else {
    text.classList.remove("show");
    text.classList.add("hidden");
  }
});
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  const mars = document.querySelector(".mars-img");
  if (scroll > 510) {
    mars.classList.add("show");
    mars.classList.remove("hidden");
  } else {
    mars.classList.remove("show");
    mars.classList.add("hidden");
  }
});
