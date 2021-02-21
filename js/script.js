$(document).ready(function () {

    $('#content-wrapper').ripples({
        resolution: 512,
        dropRadius: 10
    })
})

const progressBar = document.querySelectorAll('.progress-bar');
console.log(progressBar)
const eduWork = document.querySelector('.eduWork-wrapper');




window.addEventListener('scroll', () => {
    const pos = eduWork.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    // console.log(`Element pos: ${pos}`);
    // console.log(`Screen Position: ${screenPos}`);

    if (pos < screenPos) {
        progressBar.forEach(bar => {
            const percent = bar.dataset.percent;
            let tooltip = bar.children[0];
            bar.style.width = `${percent}%`;
            setTimeout(function () {
                tooltip.innerText = `${percent}%`;
            }, 500)
        })
    } else {
        progressBar.forEach(bar => {
            bar.style.width = 0;
            let tooltip = bar.children[0];
            setTimeout(function () {
                tooltip.innerText = ` `;
            }, 500)
        })
    }

})

$(document).ready(function () {
    $('.addSkills-wrap').slick({
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '.next',
        nextArrow: '.prev'
    })
})



const backToTop = document.querySelector('.backToTop');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
})

backToTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})