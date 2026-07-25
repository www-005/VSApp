// =========================
// VS APPS STORE SCRIPT
// =========================



// Page Load Animation

document.addEventListener("DOMContentLoaded",()=>{


    const elements = document.querySelectorAll(
        ".hero-content, .hero-image, .feature-card, .app-card"
    );


    elements.forEach((element,index)=>{


        element.style.opacity="0";


        element.style.transform="translateY(30px)";


        setTimeout(()=>{


            element.style.transition="0.7s";


            element.style.opacity="1";


            element.style.transform="translateY(0)";


        }, index * 150);



    });


});





// Mobile Menu Ready


const menuButton = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");



if(menuButton){


menuButton.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});


}
