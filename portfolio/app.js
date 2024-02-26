
document.addEventListener("scroll",()=>
{
    const header=document.querySelector('.header');
    const links1=document.querySelector('.link1');
    const links2=document.querySelector('.link2');
    const links3=document.querySelector('.link3');
const links4=document.querySelector('.link4');
    if(window.scrollY>0)
    {
        header.classList.add('headerwhenscrolled');
       links1.classList.add('linkwhenscrolled');
       links2.classList.add('linkwhenscrolled');
       links3.classList.add('linkwhenscrolled');
       links4.classList.add('linkwhenscrolled');
    }
    else
    {
        header.classList.remove('headerwhenscrolled');
        links1.classList.remove('linkwhenscrolled');
       links2.classList.remove('linkwhenscrolled');
       links4.classList.remove('linkwhenscrolled');
       links3.classList.remove('linkwhenscrolled');
    }
}
)

//before havascript

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}