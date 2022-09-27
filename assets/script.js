var droppedDown = false;

function collapseNav() {
    document.querySelector(".open-drop").removeAttribute("style");
    document.querySelector(".close-drop").removeAttribute("style");

    document.querySelector("nav").classList.remove("vertical-nav");

    document.querySelector(".left-items").removeAttribute("style");
    document.querySelector(".left-items .nav-links").removeAttribute("style");
    document.querySelector(".left-items .nav-logo").removeAttribute("style");
    document.querySelector(".right-items").removeAttribute("style");
    document.querySelector(".nav-links").removeAttribute("style");

    document.querySelector(".left-items").classList.remove("vertical-nav-margin-left");
    document.querySelector(".right-items").classList.remove("vertical-nav-margin");
    document.querySelector(".nav-links").classList.remove("vertical-nav-margin");
    document.querySelector(".nav-links").classList.add("nav-links-animated");
    document.querySelector(".nav-links").classList.remove("nav-links-simple");

    droppedDown = false;
}

document.querySelector(".dropbtn").addEventListener("click", () => {
    if (droppedDown) {
        collapseNav();
    } else {
        document.querySelector(".open-drop").style.display = "none";
        document.querySelector(".close-drop").style.display = "block";

        document.querySelector("nav").classList.toggle("vertical-nav");

        document.querySelector(".left-items").style.display = "flex";
        document.querySelector(".left-items .nav-links").style.gap = "1em";
        document.querySelector(".left-items .nav-logo").style.display = "none";
        document.querySelector(".right-items").style.gap = "1em";
        document.querySelector(".right-items").style.display = "flex";
        document.querySelector(".right-items").style.flexWrap = "wrap";

        if (window.innerWidth > 400) {
            document.querySelector(".nav-links").style.display = "flex";
        }

        document.querySelector(".left-items").classList.toggle("vertical-nav-margin-left");
        document.querySelector(".right-items").classList.toggle("vertical-nav-margin");
        document.querySelector(".nav-links").classList.toggle("vertical-nav-margin");
        document.querySelector(".nav-links").classList.toggle("nav-links-animated");
        document.querySelector(".nav-links").classList.toggle("nav-links-simple");

        droppedDown = true;
    }
});

addEventListener('resize', () => {
    if (window.innerWidth > 850) {
        collapseNav();
    }
});