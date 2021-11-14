/* Header and Scrolling */
let header = document.querySelector('header'),
    smooth = document.querySelector('#smoothScroll');

/* Partners */
let iconBx = document.querySelectorAll('.iconBx'),
    contentBx = document.querySelectorAll('.contentBx'),
    defaultContent = document.querySelector('#defaultContent'),
    body = document.querySelector('body');

const ICONBX_LENGTH = 4;
const CONTENTBX_LENGTH = 5;
const FAQS_LENGTH = 6;

/* FAQ */
let faqs = document.querySelectorAll(".questions");

/* Adding bgcolor navbar when scrolling */
document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 100) {
        header.style.cssText = "background-color: #111";
    } else {
        header.style.cssText = "background-color: transparent";
    }

    if (scroll_position > 500) {
        smooth.style.cssText = "opacity: 1; visibility: visible";
    } else {
        smooth.style.cssText = "opacity: 0; visibility: hidden";
    }
});

/* Smooth scroll */

$(".scroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 50
        },
        1000);
});

$("#smoothScroll").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        },
        200);
});

/* Adding active class on mouse hover in partners section */
for (let i = 0; i < ICONBX_LENGTH; i++) {
    iconBx[i].addEventListener('mouseover', function() {
        for (let i = 0; i < CONTENTBX_LENGTH; i++) {
            contentBx[i].className = 'contentBx';
        }
        document.getElementById(this.dataset.id).className = 'contentBx active';
        for (let i = 0; i < ICONBX_LENGTH; i++) {
            iconBx[i].className = 'iconBx';
        }
        this.className = 'iconBx active';
    })
}

/* Removing current target active in partners section when clicked outside */
body.addEventListener('click', () => {
    for (let i = 0; i < CONTENTBX_LENGTH; i++) {
        contentBx[i].className = 'contentBx';
        for (let i = 0; i < ICONBX_LENGTH; i++) {
            iconBx[i].className = 'iconBx';
        }
    }
    defaultContent.className = 'active';
})


/* Adding active class on mouse click in FAQ section */
for (let i = 0; i < FAQS_LENGTH; i++) {
    faqs[i].addEventListener('click', () => {
        for (let i = 0; i < FAQS_LENGTH; i++) {
            faqs[i].className = 'questions';
        }
        faqs[i].className = 'questions active';
        setTimeout(() => {
            faqs[i].className = 'questions';
        }, 10000)
    })

}

const arrowSvg = document.querySelectorAll(".question");

arrowSvg.forEach((item) => {
    const span = document.createElement("span");
    span.setAttribute('data-icon', 'si-glyph:arrow-down');
    span.classList.add('iconify');
    item.appendChild(span)
})