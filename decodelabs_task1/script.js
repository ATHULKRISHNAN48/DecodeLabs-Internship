/* =========================
   🌙 DARK MODE TOGGLE
========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
});


/* =========================
   ✍️ TYPING EFFECT
========================= */

const text = "Web Development • UI/UX Design • Software Solutions";
let index = 0;

function typeWriter() {

    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    }
}


/* =========================
   👁️ SCROLL REVEAL
========================= */

function reveal() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }

    });
}


/* =========================
   🚀 INIT ON LOAD
========================= */

window.addEventListener("load", () => {
    typeWriter();
    reveal();
});

window.addEventListener("scroll", reveal);


/* =========================
   🎯 OPTIONAL: CARD HOVER FIX
   (ONLY if you want JS control)
========================= */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-15px) scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });

});
