const navBar = document.querySelector(".hero-section-nav");
const navLinks = document.querySelectorAll(".nav-dropdown");
const heroNavLinks = document.querySelector(".hero-section-navlinks");


/*Top black header text-animation*/

const texts = ["Price Match Promise >", "Hassle Free Returns >", "Free Shipping $45+ >", "Registry Completion Discount >"];
let currentTextIndex = 0;

const headerText = document.getElementById("change-text");

function changeText() {
  headerText.style.opacity = 0;

  setTimeout(() => {
    currentTextIndex = (currentTextIndex + 1) % texts.length; 
    headerText.textContent = texts[currentTextIndex];
    headerText.style.opacity = 1; 
  }, 500); 
}

setInterval(changeText, 4000);



/*Text animation before the footer*/

const textList = ["Celebrate life", "Plan smarter", "Save the date", "Announce it", "Build your registry"];
let currentIndex = 0;

const animatedText = document.getElementById("text-animation");

function changeTextAnimation() {
  animatedText.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % textList.length; 
    animatedText.textContent = textList[currentIndex];
    animatedText.style.opacity = 1; 
  }, 500); 
}

setInterval(changeTextAnimation, 3000);




/*Adding background color to hero-sectio nav on scroll*/
function scrolled() {
  navBar.classList.toggle("scroll", window.scrollY > 0);
}

window.addEventListener("scroll", scrolled);




/* Adding background color to hero-section nav on hover*/
function navBackgroundHover() {
  navBar.classList.toggle("open");
}
navBar.addEventListener("mouseover", navBackgroundHover);
navBar.addEventListener("mouseout", navBackgroundHover);


/*Opening side bar*/

function openSideNav(){
  const sideBar = document.querySelector(".side-bar")
  sideBar.style.display = "flex";
}


/*Closing side bar*/

function closeSideNav(){
  const sideBar = document.querySelector(".side-bar")
  sideBar.style.display = "none";

}




/*Adding dropdown list for hero-section nav*/
navLinks.forEach((link) => {
  const newDivDropdown = document.createElement("div");
  newDivDropdown.classList.add("new-div");

  let links = [];
  if (link.textContent.includes("Plan & Invite")) {
    links = [
      "Wedding Website",
      "Guest List",
      "Save the Dates",
      "Invitations",
      "Contact Collector",
      "Smart RSVP",
      "Hotel Room Blocks",
      "Mobile App"
    ];
  } else if (link.textContent.includes("Registry")) {
    links = [
      "Wedding Registry",
      "The Registry Store",
      "Zero-Fee Cash Funds",
      "Honeymoon Funds"
    ];
  } else if (link.textContent.includes("Expert Advice")) {
    links = [
      "Wedding Guides & Ideas",
      "FAQ",
      "Help & Support"
    ];
  }


  links.forEach(text => {
    const newListitem = document.createElement("li");
    newListitem.classList.add("new-list")
    const newLink = document.createElement("a");
    newLink.classList.add("new-links");
    newLink.textContent = text;
    newLink.href = "#"; 
    newListitem.appendChild(newLink);
    newDivDropdown.appendChild(newListitem);
  });

  link.appendChild(newDivDropdown);

  
  function navDropDown() {
    newDivDropdown.classList.toggle("show");
  }

  link.addEventListener("mouseenter", navDropDown);
  link.addEventListener("mouseleave", navDropDown);
});






