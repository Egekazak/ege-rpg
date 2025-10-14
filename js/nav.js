// js/nav.js
(function() {
  setTimeout(() => {
    const megaItems = document.querySelectorAll("li.mega");

    if (!megaItems.length) return;

    const isMobile = () => window.innerWidth <= 768;

    megaItems.forEach(item => {
      const link = item.querySelector("a");
      const menu = item.querySelector(".mega-menu");

      // Reset menu each time the viewport changes
      const resetMenu = () => {
        if (isMobile()) {
          menu.style.display = "none";
          item.classList.remove("active");
        } else {
          // restore desktop hover behavior
          menu.style.display = "";
          item.classList.remove("active");
        }
      };
      window.addEventListener("resize", resetMenu);

      // MOBILE toggle
      link.addEventListener("click", e => {
        if (isMobile()) {
          e.preventDefault();

          // close others
          megaItems.forEach(other => {
            if (other !== item) {
              other.classList.remove("active");
              const otherMenu = other.querySelector(".mega-menu");
              if (otherMenu) otherMenu.style.display = "none";
            }
          });

          // toggle this one
          if (item.classList.contains("active")) {
            item.classList.remove("active");
            menu.style.display = "none";
          } else {
            item.classList.add("active");
            menu.style.display = "grid";
          }
        }
      });
    });
  }, 200);
})();
