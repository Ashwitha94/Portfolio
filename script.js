function toggleCerts() {
  const grid = document.getElementById('certGrid');
  const btn = document.querySelector('.cert-btn');
  if (grid.style.display === 'none') {
    grid.style.display = 'grid';
    btn.textContent = 'Hide Certificates';
  } else {
    grid.style.display = 'none';
    btn.textContent = 'View Certificates';
  }
}

function openModal(src) {
  document.getElementById('modalImg').src = src;
  document.getElementById('imgModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('imgModal').style.display = 'none';
}

/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
 
const navMenu = document.getElementById("navMenu");


menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================= */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =========================================
   SMOOTH SCROLL
========================================= */

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);


        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   CONTACT INFO BUTTON
========================================= */

const contactButton =
    document.querySelector(".contact-btn");


if (contactButton) {

    contactButton.addEventListener("click", function (event) {

        const contactSection =
            document.getElementById("contact");


        if (contactSection) {

            event.preventDefault();

            contactSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

}