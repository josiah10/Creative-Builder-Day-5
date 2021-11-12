const closeBtn=document.querySelector('.btn');
const sideBar=document.getElementById('sideBar');
const side=document.querySelector('.side');

closeBtn.addEventListener('click',()=>{
    side.classList.add('go-back')
     side.style.width='0';
})
sideBar.addEventListener('click',()=>{
    side.style.display='block';
    side.style.width='200px';
})