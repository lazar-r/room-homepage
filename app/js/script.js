const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        //Toggle Nav
        if(burger.classList.contains('open')){
            burger.classList.remove('open')
        }
        else {
            burger.classList.add('open');
        }
        if(nav.classList.contains('nav-active')){
            nav.classList.remove('nav-active')
        }
        else {
            nav.classList.add('nav-active')
        }
    })
}
    

navSlide();
