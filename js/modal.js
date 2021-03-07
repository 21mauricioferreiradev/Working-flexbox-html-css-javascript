
const modaloverlay = document.querySelector('.modal-overlay'); 
const cards = document.querySelectorAll('.item');

for(let item of cards){
  item.addEventListener("click", function(){
    modaloverlay.classList.add('active');
    const videoid = item.getAttribute("id");
    modaloverlay.querySelector("iframe").src= `https://www.youtube.com/embed/${videoid}`
  })
}

document.querySelector(".close-modal").addEventListener("click", function(){
  modaloverlay.classList.remove('active')
  modaloverlay.querySelector('iframe').src=""
})