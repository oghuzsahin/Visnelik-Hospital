const siteNav = document.querySelector(".site-nav");

/* Buttons */
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", function () {
    siteNav.classList.toggle("active");
    document.addEventListener("click", function(e){
        if (
            !e.composedPath().includes(menuBtn) && !e.composedPath ().includes(siteNav)
            ){
            siteNav.classList.remove("active");
        }
    })
}
);