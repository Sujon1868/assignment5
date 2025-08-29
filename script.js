document.addEventListener("DOMContentLoaded", function() {
  let favCount = 0;
  const navbarFavCount = document.getElementById("hart-available");

  for (let i = 1; i <= 9; i++) {
    const heart = document.getElementById(heart-${i});
    if (!heart) continue;

    heart.addEventListener("click", function() {
      favCount++;
      navbarFavCount.innerText = favCount;
    });
  }
  let copyCount = 0;
const copyNavbarCount = document.getElementById("copy-availabale");
const copyButtons = document.querySelectorAll("button[onclick^='copyNumber']");

for (let i = 0; i < copyButtons.length; i++) {
  let btn = copyButtons[i];

  btn.addEventListener("click", function() {
    copyCount++;
    copyNavbarCount.innerText = copyCount;
  });
}