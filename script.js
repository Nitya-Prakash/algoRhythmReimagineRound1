function canAnimation() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            start: "0% 90%",
            end: "70% 50%",
            scrub: true,
        }
    })

    tl.to("#can", {
        top: "115%",
        left: "15%"
    }, "lime")

    tl.to("#lime", {
        width: "12%",
        top: "160%",
        left: "25%",
        zIndex: 1
    }, "lime")

    tl.to("#leaf", {
        top: "110%",
        left: "75%",
        zIndex: 1
    }, "lime")

    tl.to("#ice1", {
        top: "120%",
        left: "7%",
        zIndex: 1
    }, "lime")


    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page3",
            start: "0% 95%",
            end: "25% 30%",
            scrub: true,
        }
    })

    tl2.to("#can", {
        top: "212%",
        left: "67.5%",
        width: "15%",
        display: "none"
    })


    gsap.to(".cardImage2", {
        display: "block",
        scrollTrigger: {
            trigger: ".page3",
            start: "0% 7%",
            scrub: true,
        }
    })
}

let card = document.querySelectorAll(".card");

function cardAnimation() {
    card.forEach(function (cards) {
        cards.addEventListener("mouseenter", function () {
            [3, 5, 7, 9].forEach(i => cards.childNodes[i].style.opacity = 1);
            cards.childNodes[11].style.opacity = 0.8;
            cards.childNodes[11].style.transform = "scale(0.9)";
        })
        cards.addEventListener("mouseleave", function () {
            [3, 5, 7, 9].forEach(i => cards.childNodes[i].style.opacity = 0);
            cards.childNodes[11].style.opacity = 1;
            cards.childNodes[11].style.transform = "scale(1)";
        })
    })
}


let cardcircle1 = document.querySelector(".cardcircle1");
let cardcircle2 = document.querySelector(".cardcircle2");
let cardcircle3 = document.querySelector(".cardcircle3");
let cardcircle4 = document.querySelector(".cardcircle4");

cardcircle1.addEventListener("click", function () {
    window.location.href = "./Drinks/grapefruit.html";
})
cardcircle2.addEventListener("click", function () {
    window.location.href = "./Drinks/lime.html";
})
cardcircle3.addEventListener("click", function () {
    window.location.href = "./Drinks/peach.html";
})
cardcircle4.addEventListener("click", function () {
    window.location.href = "./Drinks/blackcherry.html";
})







function mouseFollower() {
    card.forEach(function (details) {
        details.addEventListener("mouseenter", function () {
            gsap.to(details.childNodes[1], {
                display: "block",
                scale: 1
            })
        })

        details.addEventListener("mouseleave", function () {
            gsap.to(details.childNodes[1], {
                display: "none",
                scale: 0
            })
        })

        details.addEventListener("mousemove", function (data) {
            gsap.to(details.childNodes[1], {
                x: data.x - details.getBoundingClientRect().x - 175,
                y: data.y - details.getBoundingClientRect().y - 285
            })
        })
    })
}

let buttons = document.querySelectorAll(".buttons");
buttons.forEach(function (click) {
    click.addEventListener("click", function (event) {
        event.stopPropagation();
        window.location.href = "#page5";
    })
})






canAnimation();
cardAnimation();
mouseFollower();