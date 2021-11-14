// Scroll Reveal
const animation = ScrollReveal({
    origin: "top",
    distance: "100px",
    duration: 2000,
    easing: 'cubic-bezier(0,.84,.67,1.05)',
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
animation.reveal("#home h2", { distance: "400px", delay: 500, origin: "left", reset: false });
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

// Newsletter
animation.reveal("#form h1", { delay: 400, origin: "top" });
animation.reveal("#form p", { delay: 200, origin: "top" });
animation.reveal("#form #EMAIL", { distance: "600px", delay: 600, origin: "right" });

// Footer
animation.reveal(".footer p", { delay: 200, origin: "top" });
animation.reveal(".footer .contact-socials", { delay: 200, origin: "top" });