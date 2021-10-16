/* Header and Scrolling */
let header = document.querySelector('header'),
    smooth = document.querySelector('#smoothScroll');

/* Partners */
let iconBx = document.querySelectorAll('.iconBx'),
    contentBx = document.querySelectorAll('.contentBx'),
    defaultContent = document.querySelector('#defaultContent'),
    body = document.querySelector('body');

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

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
const smoothScroll = document.querySelector('#smoothScroll').addEventListener('click', scrollToPosition);

menuLinks.forEach(section => {
    section.addEventListener('click', scrollTo);
})

function scrollTo(e) {
    e.preventDefault();
    const target = getScrollTop(e.target) - 55;
    scrollToPosition(target);
}

function scrollToPosition(target) {
    window.scroll({
        top: target,
        behavior: "smooth",
    });
}

function getScrollTop(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}


/* Adding active class on mouse hover in partners section */
for (let i = 0; i < iconBx.length; i++) {
    iconBx[i].addEventListener('mouseover', function() {
        for (let i = 0; i < contentBx.length; i++) {
            contentBx[i].className = 'contentBx';
        }
        document.getElementById(this.dataset.id).className = 'contentBx active';
        for (let i = 0; i < iconBx.length; i++) {
            iconBx[i].className = 'iconBx';
        }
        this.className = 'iconBx active';
    })
}

/* Removing current target active in partners section when clicked outside */
body.addEventListener('click', () => {
    for (let i = 0; i < contentBx.length; i++) {
        contentBx[i].className = 'contentBx';
        for (let i = 0; i < iconBx.length; i++) {
            iconBx[i].className = 'iconBx';
        }
    }
    defaultContent.className = 'active';
})


/* Adding active class on mouse click in FAQ section */
for (let i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener('click', () => {
        for (let i = 0; i < faqs.length; i++) {
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
    const svg = document.createElement("svg");
    svg.innerHTML =
        `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 17 17">
        <path d="M2.16 6.246c.225 0 .45.062.65.196l6.229 4.156l6.037-4.197a1.175 1.175 0 0 1 1.304 1.958l-6.688 4.63a1.174 1.174 0 0 1-1.304.002l-6.88-4.589a1.178 1.178 0 0 1 .652-2.156z" fill="white" fill-rule="evenodd"/>
        </svg>
        `;
    item.appendChild(svg)
})