let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

const menuItem = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');
const progress_skill = document.querySelectorAll('#soft-skills .progress');


// var softSkill_item = document.querySelectorAll(".soft-skills_items");
var softSkill = document.getElementById('soft-skills');


window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    })
    // console.log(current);
    menuItem.forEach(a => {
        a.classList.remove('activeNAV');
        if (a.classList.contains(current)) {
            a.classList.add('activeNAV');
        }
    })

    if (current == "soft-skills") {
        softSkill.classList.add('active');
    }
})
console.log(document.querySelector('.soft-skills.active'));





function activeItemNav() {
    menuItem.forEach((item) =>
        item.classList.remove('activeNAV'));
    this.classList.add('activeNAV');
}


menuItem.forEach((item) =>
    item.addEventListener('click', activeItemNav));

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');


// pic
$(document).ready(function () {
    $(".image-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right"></i></button>`,
        dots: false,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                infinite: false,
                dots: true,

            },
        },],
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

// lable
const labels = document.querySelectorAll('.form__control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 40}ms"> ${letter} </span>`)
        .join('')
})


// checkbox dark mode
var checkboxDarkMode = document.getElementById('checkbox');
// console.log(checkboxDarkMode);
checkboxDarkMode.addEventListener('click', () => {
    if (checkboxDarkMode.checked == true) {
        document.body.classList.add("dark_theme");


        // logo
        document.querySelector('.logo img').src = "https://res.cloudinary.com/linhcon24/image/upload/v1714624165/5d1c76bf-2aeb-4a68-a246-e5d677b085ab.png"

        // clound
        document.querySelector('.clound').innerHTML = `<img class="animate__animated animate__fadeInLeft clound-left animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652852065/My-portfolio/clound-moon-left_jaocus_optimized_dmjzjr.png" alt="">
        <img class="animate__animated animate__fadeInRight clound-right animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652852066/My-portfolio/clound-moon_peb6rn_optimized_hzeqz3.png" alt="">`

        // inmg home
        document.querySelector('#home .image').innerHTML = ` <img src="https://res.cloudinary.com/linhcon24/image/upload/v1714624455/1a9bc84b-7e15-4c4b-a906-84facfc78eb3.jpg" alt="" class="front-img">
        <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652845805/My-portfolio/dc1-dark_optimized_etjlg4.png" alt="" class="dc1">
        <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652845802/My-portfolio/dc2-dark_optimized_bi839d.png" alt="" class="dc2">
        <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652845802/My-portfolio/dc2-dark_optimized_bi839d.png" alt="" class="dc3">`

        // circle
        document.querySelector('.skill .skill-container img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652458965/My-portfolio/picVAP-dark_qeqodg.png";

        // imgage about me
        document.querySelector('.about .row-1 .image img').src = "https://res.cloudinary.com/linhcon24/image/upload/v1714621325/480c6b0e-d4f6-42bf-bb0c-247756a46cae.jpg";

        // about taget
        document.querySelector('.about .row-1 .content img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652845802/My-portfolio/dc2-dark_optimized_bi839d.png";

        // project-border-left
        document.querySelector('.project__border__left').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652450175/My-portfolio/project-dark_uq99k2.png";

        // bg__fav__cover
        document.querySelector('.bg__fav__cover').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652458479/My-portfolio/bg_fav_cover-dark_q0xovc.png";

    }
    else if (checkboxDarkMode.checked == false) {
        document.body.classList.remove("dark_theme");

        // logo
        document.querySelector('.logo img').src = "https://res.cloudinary.com/linhcon24/image/upload/v1714623836/d0dc6f78-8181-446b-b514-b59f71ff05a1.png"

        // clound
        document.querySelector('.clound').innerHTML = `  <img class="animate__animated animate__fadeInLeft clound-left animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652802792/My-portfolio/clound-left_optimized_xjoubm.png" alt="">
        <img class="animate__animated animate__fadeInRight clound-right animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652802792/My-portfolio/clound-right_optimized_riwik8.png" alt="">
`

        // inmg home
        document.querySelector('#home .image').innerHTML = ` <img src="https://res.cloudinary.com/linhcon24/image/upload/v1714617654/6cc903b1-fab2-4505-ba00-f74349986aa7.jpg" alt="" class="front-img">
         <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652300890/My-portfolio/dc1_stlq7p.png" alt="" class="dc1">
         <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652300891/My-portfolio/dc2_wquo4x.png" alt="" class="dc2">
         <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652300891/My-portfolio/dc2_wquo4x.png" alt="" class="dc3">
`

        // circle
        document.querySelector('.skill .skill-container img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652300903/My-portfolio/picVAP_m0q8ij.png";
        
        // imgage about me
        document.querySelector('.about .row-1 .image img').src = "https://res.cloudinary.com/linhcon24/image/upload/v1714620977/140cfb49-5147-432c-86c8-f497720f4bf4.jpg";

        // about taget
        document.querySelector('.about .row-1 .content img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652300891/My-portfolio/dc2_wquo4x.png";


        // project-border-left
        document.querySelector('.project__border__left').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652300902/My-portfolio/project_border_ofqone.png";

        // bg__fav__cover
        document.querySelector('.bg__fav__cover').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652856357/My-portfolio/bg_fav_cover_optimized_z38zzf.png";

    }
})



// soft skill


// end soft skill

// contact

// end contact