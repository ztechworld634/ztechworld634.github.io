const sections = document.querySelectorAll(".section");
const sectButtons = document.querySelectorAll(".controls");
const sectButton = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
    //Button click active class
    for (let i = 0; i < sectButton.length; i++) {
        sectButton[i].addEventListener("click", function () {
            let currentButton = document.querySelectorAll(".active-btn");
            currentButton[0].className = currentButton[0].className.replace(
                "active-btn",
                ""
            );
            this.className += " active-btn";
        });
    }

    //Sections active
    allSections.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //remove selected from other buttons
            sectButtons.forEach((btn) => {
                btn.classList.remove("active-btn");
            });
            e.target.classList.add("active-btn");

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove("active");
            });

            const element = document.getElementById(id);
            element.classList.add("active");
        }
    });
}

PageTransitions();
