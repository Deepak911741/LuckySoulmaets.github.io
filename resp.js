buger = document.querySelector('.buger')
navbar = document.querySelector('.navbar')
right = document.querySelector('.right')
underline = document.querySelector('.underline')


buger.addEventListener('click', ()=>{
    right.classList.toggle('v-class-resp');
    underline.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})