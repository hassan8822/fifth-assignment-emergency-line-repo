
    const container = document.getElementById("cardContainer");
    const historyList = document.getElementById("callHistory");
    const copyCountEl = document.getElementById("copyCount");
    const favCountEl = document.getElementById("favCount");
    let copyCount = 0;
    let favCount = 0;

    // Generate cards
    services.forEach((s, i) => {
      const card = document.createElement("div");
      card.className = "bg-white shadow rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition";
      card.innerHTML = `
        <div>
          <div class="flex justify-between">
            <h4 class="font-semibold">${s.name}</h4>
            <button class="favBtn text-gray-400 hover:text-red-500" data-id="${i}">♡</button>
          </div>
          <p class="text-sm text-gray-500">${s.dept}</p>
          <p class="text-2xl font-bold my-2">${s.number}</p>
          <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">${s.tag}</span>
        </div>
        <div class="flex justify-between mt-3">
          <button class="copyBtn border rounded px-3 py-1 text-sm hover:bg-green-100" data-number="${s.number}">📋 Copy</button>
          <button class="callBtn bg-green-500 text-white rounded px-3 py-1 text-sm hover:bg-green-600" data-name="${s.name}" data-number="${s.number}">📞 Call</button>
        </div>
      `;
      container.appendChild(card);
    });

    // Copy functionality
    document.querySelectorAll(".copyBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        navigator.clipboard.writeText(btn.dataset.number);
        copyCount++;
        copyCountEl.textContent = `${copyCount} Copy`;
      });
    });

    // Call functionality
    document.querySelectorAll(".callBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        const time = new Date().toLocaleTimeString();
        const li = document.createElement("li");
        li.innerHTML = `<strong>${btn.dataset.name}</strong> - ${btn.dataset.number}<br><span class="text-gray-500 text-xs">${time}</span>`;
        historyList.prepend(li);
      });
    });

    // Favorite functionality
    document.querySelectorAll(".favBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (btn.textContent === "♡") {
          btn.textContent = "❤️";
          favCount++;
        } else {
          btn.textContent = "♡";
          favCount--;
        }
        favCountEl.textContent = favCount;
      });
    });

    // Clear history
    document.getElementById("clearHistory").addEventListener("click", () => {
      historyList.innerHTML = "";
    });

