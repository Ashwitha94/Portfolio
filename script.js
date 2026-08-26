/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");

const navMenu = document.getElementById("navMenu");


if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {

        if (navMenu.style.display === "flex") {

            navMenu.style.display = "none";

        } else {

            navMenu.style.display = "flex";

        }

    });


    const navLinks = navMenu.querySelectorAll("a");


    navLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            if (window.innerWidth <= 768) {

                navMenu.style.display = "none";

            }

        });

    });

}



/* =====================================================
   OPEN CERTIFICATE
===================================================== */

function openCertificate(imagePath) {

    const modal =
        document.getElementById("certificateModal");

    const image =
        document.getElementById("certificateImage");


    image.src = imagePath;

    modal.style.display = "flex";

    document.body.style.overflow = "hidden";
}



/* =====================================================
   CLOSE CERTIFICATE
===================================================== */

function closeCertificate() {

    const modal =
        document.getElementById("certificateModal");


    modal.style.display = "none";

    document.body.style.overflow = "auto";
}



/* =====================================================
   ESC KEY TO CLOSE CERTIFICATE
===================================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeCertificate();

    }

});
