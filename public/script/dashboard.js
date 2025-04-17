'strict'

const section = document.querySelector('section');
const logo = document.querySelector('#logo');
const display = document.querySelector('#display');
const bar = document.querySelector('#fa-bars');
const xmark = document.querySelector('#fa-xmark');
const sidenav = document.querySelector('.side-nav');


// mobile navigation
const m_bar = document.querySelector('#bars');
const m_xmark = document.querySelector('#xmark');
const m_sidenav = document.querySelector('#sidenav');
// mobile navigation

console.log('hell')

// for desktop nav
bar.style.display='none'

// for mobile nav
m_xmark.style.display='none'


// desktop navigation
bar.addEventListener('click', (e)=>{
    open_nav();
})

xmark.addEventListener('click', (e)=>{
    close_nav();
})

const open_nav = ()=>{
    logo.style.display='block'
    xmark.style.display='block'
    bar.style.display='none'
    section.style.padding='10px 10px'
    sidenav.style.width='20vw'
    display.style.width='80vw'
    console.log('desktop side nav is open')
}

const close_nav = ()=>{
    logo.style.display='none'
    bar.style.display='block'
    xmark.style.display='none'
    section.style.padding='10px 0px'
    display.style.width='96.4vw'
    sidenav.style.width='3.6vw'
    console.log('dsktop side nav is close')
}
// desktop navigation


// mobile navigation
m_bar.addEventListener('click', (e)=>{
    open_mobile_nav();
})

m_xmark.addEventListener('click', (e)=>{
    close_mobile_nav();
})

const open_mobile_nav = ()=>{
    m_xmark.style.display='block'
    m_bar.style.display='none'
    m_sidenav.style.width='100%'
    console.log('side nav is open')
}

const close_mobile_nav = ()=>{
    m_bar.style.display='block'
    m_xmark.style.display='none'
    m_sidenav.style.width='0%'
    console.log('side nav is close')
}
// mobile navigation