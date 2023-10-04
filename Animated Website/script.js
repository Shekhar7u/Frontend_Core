let cursor = document.querySelector('.cursor')
let blur = document.querySelector('.cursorBlur')

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + 'px';
    cursor.style.top = dets.y + 'px';

}
)
document.addEventListener("mousemove", function (dets) {
    blur.style.left = dets.x - 200 + 'px';
    blur.style.top = dets.y - 200 + 'px';

})
gsap.to('.nav',
    {
        backgroundColor: '#000',
        duration: 1,
        height: '100px',
        scrollTrigger:
        {
            trigger: '.nav',
            scroller: 'body',
            // markers: true,
            start: 'top -10%',
            end: 'top -11%',
            scrub: true,
        }

    }
)
gsap.to('.main',
    {
        backgroundColor: '#000',
        scrollTrigger:
        {
            trigger: '.main',
            scroller: 'body',
            // markers: true,
            start: 'top -25%',
            end: 'top -70%',
            scrub: 2
        }
    }
)
let h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        cursor.style.scale = 3
        cursor.style.border = "0.5px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    e.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})
gsap.from(".about, .aboutUs", {
    y: 80,
    duration: 1,
    scrollTrigger: {
        trigger: ".aboutUs",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 60%",
        scrub: 3,
    },
});
gsap.from("#topangle", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#topangle",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 47%",
        scrub: 1,
    }
})
gsap.from("#bottomangle", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#bottomangle",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 70%",
        scrub: 1,
    }
})
gsap.from(".page4 h1", {
    y: 70,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 95%",
        end: "top 70%",
        scrub: 2,
    }
})
