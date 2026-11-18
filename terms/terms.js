
document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mainNav.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.textContent = isOpen ? "✕" : "☰";

        });

        mainNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";

            });

        });

    }


    // Print Terms and Conditions
    const printButton = document.getElementById("printTerms");

    if (printButton) {

        printButton.addEventListener("click", function () {

            window.print();

        });

    }


    // Back to top button
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                backToTop.classList.add("visible");

            } else {

                backToTop.classList.remove("visible");

            }

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // Automatically update the copyright year
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent = new Date().getFullYear();

    }


    // Highlight the currently viewed section
    const sections = document.querySelectorAll(".terms-section");
    const tocLinks = document.querySelectorAll(".toc-link");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const currentId = entry.target.id;

                    tocLinks.forEach(function (link) {

                        const isActive =
                            link.getAttribute("href") === "#" + currentId;

                        link.classList.toggle("active", isActive);

                    });

                }

            });

        }, {
            rootMargin: "-20% 0px -65% 0px"
        });

        sections.forEach(function (section) {

            observer.observe(section);

        });

    }

});
