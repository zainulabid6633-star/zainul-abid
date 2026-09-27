/* =========================================================
   ZAIN PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 700);

});


/* =========================================================
   ELEMENTS
========================================================= */

const header = document.querySelector(".header");

const menuBtn = document.querySelector("#menuBtn");

const navMenu = document.querySelector(".nav-menu");

const navLinks = document.querySelectorAll(".nav-link");

const themeBtn = document.querySelector("#themeBtn");

const backTop = document.querySelector("#backTop");

const year = document.querySelector("#year");


/* =========================================================
   CURRENT YEAR
========================================================= */

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =========================================================
   MOBILE MENU
========================================================= */

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* CLOSE MENU AFTER CLICK */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   HEADER SCROLL
========================================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {

    const scrollPosition = window.scrollY + 180;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });

            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );

            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* =========================================================
   DARK / LIGHT MODE
========================================================= */

const savedTheme = localStorage.getItem("zain-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const lightMode =
        document.body.classList.contains("light-mode");


    if (lightMode) {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        localStorage.setItem(
            "zain-theme",
            "light"
        );

    } else {

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        localStorage.setItem(
            "zain-theme",
            "dark"
        );

    }

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   PORTFOLIO FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");


        portfolioItems.forEach(item => {

            if (
                filter === "all" ||
                item.classList.contains(filter)
            ) {

                item.classList.remove("hide");

            } else {

                item.classList.add("hide");

            }

        });

    });

});


/* =========================================================
   PORTFOLIO IMAGE MODAL
========================================================= */

const modal =
    document.querySelector("#imageModal");

const modalImage =
    document.querySelector("#modalImage");

const modalTitle =
    document.querySelector("#modalTitle");

const modalClose =
    document.querySelector("#modalClose");

const viewButtons =
    document.querySelectorAll(".view-btn");


viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        const image =
            button.getAttribute("data-image");

        const title =
            button.getAttribute("data-title");


        modalImage.src = image;

        modalTitle.textContent = title;

        modal.classList.add("active");

        document.body.classList.add("no-scroll");

    });

});


/* CLOSE MODAL */

function closeModal() {

    modal.classList.remove("active");

    document.body.classList.remove("no-scroll");

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener("click", event => {

    if (event.target === modal) {

        closeModal();

    }

});


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.querySelector("#contactForm");


contactForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.querySelector("#name").value.trim();

    const email =
        document.querySelector("#email").value.trim();

    const subject =
        document.querySelector("#subject").value.trim();

    const message =
        document.querySelector("#message").value.trim();


    if (!name || !email || !subject || !message) {

        alert("Please fill in all fields.");

        return;

    }


    /*
       This opens the visitor's email application.
       Replace your@email.com with your real email.
    */

    const myEmail =
        "your@email.com";


    const mailSubject =
        encodeURIComponent(
            `${subject} - Portfolio Contact`
        );


    const mailBody =
        encodeURIComponent(
            `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
        );


    window.location.href =
        `mailto:${myEmail}?subject=${mailSubject}&body=${mailBody}`;


    contactForm.reset();

});


/* =========================================================
   BACK TO TOP
========================================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function(event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId === "#" ||
                !document.querySelector(targetId)
            ) {

                return;

            }


            event.preventDefault();


            const target =
                document.querySelector(targetId);


            const headerHeight =
                header.offsetHeight;


            const targetPosition =
                target.offsetTop - headerHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        });

    });


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        img.style.display = "none";

        if (img.parentElement) {

            img.parentElement.classList.add(
                "image-placeholder"
            );

        }

    });

});


/* =========================================================
   CURSOR EFFECT - DESKTOP
========================================================= */

if (window.innerWidth > 900) {

    const cursor =
        document.createElement("div");

    cursor.style.position = "fixed";

    cursor.style.width = "10px";

    cursor.style.height = "10px";

    cursor.style.borderRadius = "50%";

    cursor.style.background = "var(--primary)";

    cursor.style.pointerEvents = "none";

    cursor.style.zIndex = "99999";

    cursor.style.transform =
        "translate(-50%, -50%)";

    cursor.style.transition =
        "transform 0.08s linear";

    document.body.appendChild(cursor);


    document.addEventListener("mousemove", event => {

        cursor.style.left =
            event.clientX + "px";

        cursor.style.top =
            event.clientY + "px";

    });

}