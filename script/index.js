
let likes=0, coins =100, copies =0;

document.getElementById("likeTotal").innerText = likes;
document.getElementById("coinTotal").innerText = coins;
document.getElementById("copyCount").innerText =copies ;


const hearts =document.querySelectorAll(".fa-heart");
for(const  heart of hearts) {
  heart.addEventListener("click",function(){
    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");

    if(heart.classList.contains("fa-solid")){
        likes =likes + 1;
    }
    else{
        likes =likes - 1;
    }
    document.getElementById("likeTotal").innerText = likes;
  })
}

const copyBtns = document.querySelectorAll(".copy-btn");
for (const copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function() {
    
        const card = copyBtn.closest('.details-item');
        const num = card.querySelector('.Service-number').innerText;
        
        navigator.clipboard.writeText(num);
        alert('Copied ' + num);
        
        copies = copies + 1;
        document.getElementById('copyCount').innerText = copies;
    });
}

const callBtns = document.querySelectorAll('.call-btn-number');
for (const callBtn of callBtns) {
    callBtn.addEventListener('click', function() {
        if (coins < 20) {
            alert('Low Coin');
            return;
        }

        coins = coins - 20;
        document.getElementById('coinTotal').innerText = coins;

        const card = callBtn.closest('.details-item');
        const name = card.querySelector('.Service-title').innerText;
        const num = card.querySelector('.Service-number').innerText;
        const time = new Date().toLocaleTimeString();

        alert('Calling Now : ' + name);








        const historyList = document.getElementById('history-list');
        historyList.innerHTML += `
            <div class="bg-gray-50 p-3 rounded-md mb-2">
                <div class="flex justify-between">
                    <div>
                        <h3>${name}</h3>
                        <p>${num}</p>
                        <small>${time}</small>
                    </div>
                    <i class="fa-solid fa-phone text-green-500"></i>
                </div>
            </div>

                 `;
    });
}

const clearHistoryBtn = document.querySelector('#history-box button');
clearHistoryBtn.addEventListener('click', function() {
    document.getElementById('history-list').innerHTML = '';
});





