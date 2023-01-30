const navbar = document.querySelector(".navbar")
const navbarOffsetTop = navbar.offsetTop
const sections = document.querySelectorAll("section")
const navbarLinks = document.querySelectorAll(".navbar-link")
const progress = document.querySelector(".progress-bars-wrapper")
const progressBarPercents = [98, 98, 95, 97, 91, 88, 72]

window.addEventListener("scroll", () => {
    mainFn()
})

// Main Function
const mainFn = () => {

    // Navigation Section Script
    if(window.pageYOffset >= navbarOffsetTop){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky")
    }

    sections.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop - 10){
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove("change")
            })
            navbarLinks[i].classList.add("change")
        }
    })

    // Precentage for About Section
    if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
        document.querySelectorAll(".progress-percent").forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`
            el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i]
        })
    }

}

mainFn()
// End of Main function


// Reload the page whenever the window size is changed
// window.addEventListener("resize", () => {
//     window.location.reload()
// })