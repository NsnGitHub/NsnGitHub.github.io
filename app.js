// Intro animation
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.fromTo(".navbar", {opacity: 0}, {opacity: 1, duration: 2});
tl.fromTo(".content", {opacity: 0}, {opacity: 1, duration: 2}, '-=1');

// JQuery Sliders 

$(".aboutCover").click(function() {
    $(".aboutCover").slideToggle();
});

$(".projectsCover").click(function() {
    $(".projectsCover").slideToggle();
});

$(".resumeCover").click(function() {
    $(".resumeCover").slideToggle();
});

$(".navAbout").click(function() {
    $(".aboutCover").slideToggle();
});

$(".navProjects").click(function() {
    $(".projectsCover").slideToggle();
});

$(".navResume").click(function() {
    $(".resumeCover").slideToggle();
});
