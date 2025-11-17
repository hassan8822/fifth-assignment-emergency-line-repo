
let likes=0, coins =100, copies =0;

document.getElementById("likeTotal").innerText = likes;
document.getElementById("coinTotal").innerText = coins;
document.getElementById("copyTotal").innerText =copies;


const hearts =document.querySelectorAll(".fa-heart");
for(const  heart of hearts) {
  heart.addEventListener("click",function(){
    heart.classList.toggle("fa-regular");
    heart.classList.toggle("fa-solid");

    if(heart.classList.toggle("fa-solid")){
        likes =likes + 1;
    }
    else{
        likes =likes - 1;
    }
    document.getElementById("likeTotal").innerText = likes;
  })
}





