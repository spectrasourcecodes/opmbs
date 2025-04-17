'strict'

const bar = document.querySelector('.fa-bars');
const xmark = document.querySelector('.fa-xmark');
const sidenav = document.querySelector('.sidenav');

xmark.style.display='none'

bar.addEventListener('click', (e)=>{
    open_nav();
})

xmark.addEventListener('click', (e)=>{
    close_nav();
})

const open_nav = ()=>{
    xmark.style.display='block'
    bar.style.display='none'
    sidenav.style.width='100%'
    console.log('side nav is open')
}

const close_nav = ()=>{
    bar.style.display='block'
    xmark.style.display='none'
    sidenav.style.width='0%'
    console.log('side nav is close')
}