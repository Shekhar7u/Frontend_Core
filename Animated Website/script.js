let cursor = document.querySelector('.cursor')
let blur = document.querySelector('.cursorBlur')

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + 'px';
    cursor.style.top = dets.y + 'px';

})
document.addEventListener("mousemove", function (dets) {
    blur.style.left = dets.x - 200 + 'px';
    blur.style.top = dets.y - 200 + 'px';

})
gsap.to('.nav', {
    backgroundColor: '#000',
    duration: 1,
    height: '100px',
    scrollTrigger: {
        trigger: '.nav',
        scroller: 'body',
        // markers: true,
        start: 'top -10%',
        end: 'top -11%',
        scrub: true,
    }

})
gsap.to('.main', {
    backgroundColor: '#000',
    scrollTrigger: {
        trigger: '.main',
        scroller: 'body',
        // markers: true,
        start: 'top -25%',
        end: 'top -70%',
        scrub: 2
    }
})