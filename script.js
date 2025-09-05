// document.addEventListener("DOMContentLoaded", function() {
//   let favCount = 0;
//   const navbarFavCount = document.getElementById("hart-available");

//   for (let i = 1; i <= 9; i++) {
//     const heart = document.getElementById(`heart-${i}`);
//     if (!heart) continue;

//     heart.addEventListener("click", function() {
//       favCount++;
//       navbarFavCount.innerText = favCount;
//     });
//   }

const heartBtns = document.querySelectorAll('.fa-heart')
console.log(heartBtns);
const navbarFavCount = document.getElementById("heart-available");

for (const element of heartBtns) {
  element.addEventListener("click",function(){const heartCount = navbarFavCount.innerText 
    navbarFavCount.innerText=Number(heartCount)+1

  })
  
}


  let copyCount = 0;
  const copyNavbarCount = document.getElementById("copy-available"); 
  const copyButtons = document.querySelectorAll("button[onclick^='copyNumber']");

  for (let i = 0; i < copyButtons.length; i++) {
    let btn = copyButtons[i];

    btn.addEventListener("click", function() {
      copyCount++;
      copyNavbarCount.innerText = copyCount;
    });
    
  }
   

  let coins = 100; 
  const coinCount = document.getElementById("coin-count");
  const callHistoryContainer = document.querySelector(".call-history");
  const callButtons = document.querySelectorAll(".call-btn");
  const clearHistoryBtn = document.getElementById("clear-history");

  for (let i = 0; i < callButtons.length; i++) {
    let btn = callButtons[i];

    btn.addEventListener("click", function() {
      const serviceName = btn.dataset.service;
      const serviceNumber = btn.dataset.number;

      if (coins < 20) {
        alert("Not enough coins to make the call!");
        return;
      }

      alert(`📞 Calling ${serviceName} at ${serviceNumber}...`);

      coins -= 20;
      coinCount.innerText = coins;

      if (callHistoryContainer) {
        const historyItem = document.createElement("div");
        historyItem.classList.add(
          "flex", "justify-between", "items-center", "w-full",
          "p-2", "mt-2", "mb-2", "bg-gray-100", "rounded-md"
        );

        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        historyItem.innerHTML = `
          <div class="flex flex-col">
            <span class="font-semibold text-gray-700">${serviceName}</span>
            <span class="text-gray-500 font-bold">${serviceNumber}</span>
          </div>
          <div class="text-gray-700 font-semibold">${formattedTime}</div>
        `;

        callHistoryContainer.appendChild(historyItem);
      }
    });
  }

  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", function() {
      if (callHistoryContainer) callHistoryContainer.innerHTML = "";
    });
  }

