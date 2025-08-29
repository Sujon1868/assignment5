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