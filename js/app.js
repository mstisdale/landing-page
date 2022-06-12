// Setup event listeners for each function

document.addEventListener('DOMContentLoaded', NavBar, false);
document.addEventListener('DOMContentLoaded', ActiveSection, false);
document.addEventListener('DOMContentLoaded', ActiveNav, false);
document.addEventListener('DOMContentLoaded', Menu, false);

// Dynamically builds the navigation menu
function NavBar() {
    const section = document.querySelectorAll('section');
    for (let i = 0; i < section.length; i++) {
        const li = document.createElement('li');
        const tag = document.createElement('a');
        const sectionName = section[i].getAttribute('data-nav');
        const sectionNamePart = sectionName.replace(/\s/g, '').toLowerCase();
        tag.setAttribute('href', "#" + sectionNamePart);
        tag.setAttribute('id', "navlinks" + [i + 1]);
        tag.innerText = sectionName;
        li.appendChild(tag);
        document.getElementById("navbar__list").appendChild(li);
        document.getElementById("navlinks" + [i + 1]).addEventListener("click", function () {
            Scroll(i + 1)
        });
    };
}

// Makes the current section active 
function ActiveSection() {
    window.addEventListener('scroll', function () {
        const element = document.getElementsByClassName('landing__container');
        for (let i = 0; i < element.length; i++) {
            const position = element[i].getBoundingClientRect();
            const posit = position.top;
            if (posit <= window.innerHeight / 2) {
                let activeClass = document.getElementsByClassName("your-active-class");
                activeClass[0].className = activeClass[0].className.replace(" your-active-class", "");
                element[i].className += " your-active-class";

                const current = document.getElementsByClassName("active");
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" active", "");
                }

                const links = document.getElementById("navbar__list").querySelectorAll('li');
                links[i].className += " active";
            };
        };
    });
}

// Highlights active navbar link
function ActiveNav() {
    const linksContainer = document.getElementById("navbar__list");
    const links = linksContainer.querySelectorAll('li');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            const current = document.getElementsByClassName("active");
            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    };
}

// ScrollTo event handling
function Scroll(sectionI) {
    const section = document.getElementById('section' + sectionI);
    const pos = section.offsetTop;
    event.preventDefault();
    window.scrollTo({
        left: 0,
        top: pos,
        behavior: 'smooth'
    });
    Menu();
}


// Creates top nav menu
function Menu() {
    let x = document.getElementById("navbar__list");
    if (x.className === "navbar__menu") {
        x.className += " responsive";
    } else {
        x.className = "navbar__menu";
    }
}

