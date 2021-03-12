const navSlide = () => {
    const burger   = document.querySelector('.burger');
    const nav      = document.querySelector('nav')
    const navlinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        //Toggle Nav
        if(burger.classList.contains('open')){
            burger.classList.remove('open')
        }
        else {
            burger.classList.add('open');
        }
        if(navlinks.classList.contains('nav-active')){
            navlinks.classList.remove('nav-active')
        }
        else {
            navlinks.classList.add('nav-active')
        }
        if(nav.classList.contains('overlay')){
            nav.classList.remove('overlay')
        }
        else {
            nav.classList.add('overlay')
        }
    })
}
    
navSlide();
