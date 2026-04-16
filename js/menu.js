document.addEventListener("DOMContentLoaded", function () {
    var menuButtons = document.querySelectorAll("[data-menu-toggle]");

    menuButtons.forEach(function (button) {
        var targetId = button.getAttribute("data-menu-toggle");
        var nav = document.getElementById(targetId);

        if (!nav) {
            return;
        }

        var closeMenu = function () {
            button.setAttribute("aria-expanded", "false");
            nav.classList.remove("headerNavOpen");
        };

        button.addEventListener("click", function () {
            var isOpen = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", String(!isOpen));
            nav.classList.toggle("headerNavOpen", !isOpen);
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 820) {
                closeMenu();
            }
        });
    });
});
