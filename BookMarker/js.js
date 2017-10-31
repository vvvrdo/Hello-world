const modal = document.getElementById('main');
const openBtn = document.getElementById('button');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', openModal);
function openModal(){
    modal.style.display = "block";
};
closeBtn.addEventListener('click', closeModal);
function closeModal(){
    modal.style.display = "none";
};
window.addEventListener('click', closeFo)
function closeFo(h){
    if(h.target == modal){
        modal.style.display = "none";
    };
};