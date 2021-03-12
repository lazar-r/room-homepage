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

const roomData = [
    {
        imageURL: `https://upload.cc/i1/2021/02/16/u2sO8z.jpg`,
        roomTitle: 'Discover innovative ways to decorate',
        roomIntro: `We provide unmatched quality, comfort, and style for property owners across the country.
    Our experts combine form and function in bringing your vision to life. Create a room in your
    own style with our collection and make your property a reflection of you and what you love.`
    },
    {
        imageURL: `https://upload.cc/i1/2021/02/16/2zrioE.jpg`,
        roomTitle: 'We are available all across the globe',
        roomIntro: `With stores all over the world, it's easy for you to find furniture for your home or place of business.
Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
store locator. Any questions? Don't hesitate to contact us today.`
    },
    {
        imageURL: `https://upload.cc/i1/2021/02/16/ce1mb4.jpg`,
        roomTitle: 'Manufactured with the best materials',
        roomIntro: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
to ensure that every product is made as perfect and as consistent as possible. With three decades of
experience in this industry, we understand what customers want for their home and office.`
    }
];

let dataNum = 0;
const previousButton = document.querySelector('.btn-left');
const nextButton = document.querySelector('.btn-right');
const BackgroundImage = document.querySelector('.main-img');
const roomTitle = document.querySelector('.text1 h1');
const roomIntro = document.querySelector('.text1 p');

function changeData() {
    BackgroundImage.setAttribute('style', `background-image: url('${roomData[`${dataNum}`].imageURL}');`);
    roomTitle.textContent = `${roomData[`${dataNum}`].roomTitle}`;
    roomIntro.textContent = `${roomData[`${dataNum}`].roomIntro}`;
}

nextButton.addEventListener('click', function () {
    if (dataNum >= 0 && dataNum < (roomData.length - 1)) {
        dataNum++;
    }
    changeData();
});

previousButton.addEventListener('click', function () {
    if (dataNum >= 0 && dataNum < roomData.length) {
        dataNum--;
    }
    changeData();
})
