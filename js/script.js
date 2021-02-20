$(document).ready(function () {

    $('#content-wrapper').ripples({
        resolution: 512,
        dropRadius: 10
    })
})

const progressBar = document.querySelectorAll('.progress-bar');

progressBar.forEach(bar => {
    const percent = bar.dataset.percent;
    let tooltip = bar.children[0];
    bar.style.width = `${percent}%`;
    tooltip.innerText = `${percent}%`;
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