/* Header and Scrolling */
const header = document.querySelector('header');
const smooth = document.querySelector('#smoothScroll')

/* Partners */
let iconBx = document.querySelectorAll('.iconBx');
let contentBx = document.querySelectorAll('.contentBx');
let body = document.querySelector('body');

/* FAQ */
let faqs = document.querySelectorAll(".questions");

/* Adding bgcolor navbar when scrolling */
document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 100) {
        $(header).css('backgroundColor', '#111');
    } else {
        $(header).css('backgroundColor', 'transparent');
    }

    if (scroll_position > 500) {
        $(smooth).css({ 'opacity': '1', 'visibility': 'visible' });
    } else {
        $(smooth).css({ 'opacity': '0', 'visibility': 'hidden' });
    }
});

/* Smooth scroll */
jQuery(document).ready(($) => {
    $("#smoothScroll").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
                scrollTop: 0,
            },
            2000);
    });


    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            },
            1000);
    });
});


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
$("body").click(() => {
    $(".contentBx").removeClass('active');
    $(".iconBx").removeClass('active');
    $("#content4").addClass('active');
});

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

// Scroll Reveal
const animation = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 2000,
    reset: true,
});

// Header
animation.reveal(".scroll1", { delay: 200, origin: "right", reset: false });
animation.reveal(".scroll2", { delay: 400, origin: "right", reset: false });
animation.reveal(".scroll3", { delay: 600, origin: "right", reset: false });
animation.reveal(".scroll4", { delay: 800, origin: "right", reset: false });
animation.reveal(".logo", { delay: 1000, origin: "right", reset: false });

// Home Content
animation.reveal("#home h1", { distance: "400px", delay: 200, origin: "left", reset: false });
animation.reveal("#home h3", { distance: "400px", delay: 500, origin: "left", reset: false });
animation.reveal("#home h5", { distance: "400px", delay: 950, origin: "left", reset: false });
animation.reveal("#home .btn-primary", { distance: "400px", delay: 1900, origin: "left", reset: false });

// Home Icons
animation.reveal(".icon1", { distance: "400px", delay: 3100, origin: "right", reset: false });
animation.reveal(".icon2", { distance: "400px", delay: 3300, origin: "right", reset: false });
animation.reveal(".icon3", { distance: "400px", delay: 3600, origin: "right", reset: false });
animation.reveal(".images", { distance: "400px", delay: 950, origin: "right", reset: false });

// About
animation.reveal("#about h1", { delay: 200, origin: "top" });
animation.reveal("#about p", { delay: 600, origin: "top" });

// Partners Content
animation.reveal("#partners h1", { distance: "250px", duration: 4500, origin: "left" });
animation.reveal(".text", { origin: "right" });
animation.reveal(".imgBox", { distance: "400px", origin: "left" });
animation.reveal(".iconBx", { delay: 350, origin: "bottom" });

// FAQ Questions
animation.reveal("#faq h1", { delay: 200, origin: "top" });
animation.reveal(".questions", { delay: 350, origin: "bottom" });

// Footer
animation.reveal(".footer p", { delay: 200, origin: "top" });
animation.reveal(".footer .contact-socials", { delay: 200, origin: "top" });