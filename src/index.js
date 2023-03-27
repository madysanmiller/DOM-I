const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const navLinks = document.querySelectorAll("nav a");
const ctaH1 = document.querySelector(".cta-text h1")
const ctaButton = document.querySelector(".cta-text button")
const textContentHeaders = document.querySelectorAll(".text-content h4")
const textContentParagraphs = document.querySelectorAll(".text-content p")
const contactSectionHeader = document.querySelector(".contact h4")
const contactSectionParagraphs = document.querySelectorAll(".contact p")
const footerSection = document.querySelector("footer a")
const logoImg = document.querySelector(".logo")
const ctaImg = document.querySelector("#cta-img")
const accentImg = document.querySelector(".middle-img")

navLinks[0].textContent = siteContent["nav"]["nav-item-1"]
navLinks[1].textContent = siteContent["nav"]["nav-item-2"]
navLinks[2].textContent = siteContent["nav"]["nav-item-3"]
navLinks[3].textContent = siteContent["nav"]["nav-item-4"]
navLinks[4].textContent = siteContent["nav"]["nav-item-5"]
navLinks[5].textContent = siteContent["nav"]["nav-item-6"]

navLinks.forEach(link => link.classList.add("italic"))

ctaH1.textContent = siteContent["cta"]["h1"]
ctaButton.textContent = siteContent["cta"]["button"]

textContentHeaders[0].textContent = siteContent["main-content"]["features-h4"]
textContentHeaders[1].textContent = siteContent["main-content"]["about-h4"]
textContentHeaders[2].textContent = siteContent["main-content"]["services-h4"]
textContentHeaders[3].textContent = siteContent["main-content"]["product-h4"]
textContentHeaders[4].textContent = siteContent["main-content"]["vision-h4"]


textContentParagraphs[0].textContent = siteContent["main-content"]["features-content"]
textContentParagraphs[1].textContent = siteContent["main-content"]["about-content"]
textContentParagraphs[2].textContent = siteContent["main-content"]["services-content"]
textContentParagraphs[3].textContent = siteContent["main-content"]["product-content"]
textContentParagraphs[4].textContent = siteContent["main-content"]["vision-content"]

contactSectionHeader.textContent = siteContent["contact"]["contact-h4"]
contactSectionParagraphs[0].textContent = siteContent["contact"]["address"]
contactSectionParagraphs[1].textContent = siteContent["contact"]["phone"]
contactSectionParagraphs[2].textContent = siteContent["contact"]["email"]

footerSection.textContent = siteContent["footer"]["copyright"]

footerSection.classList.add("bold")

// const nav = document.querySelectorAll("nav a");
// const ctaH1 = document.querySelector(".cta-text h1");
// const ctaButton = document.querySelector(".cta-text button");

// const topHeaders = document.querySelectorAll(".top-content .text-content h4");
// const bottomHeaders = document.querySelectorAll(".bottom-content .text-content h4");

// const topP = document.querySelectorAll(".top-content .text-content p");
// const bottomP = document.querySelectorAll(".bottom-content .text-content p");

// const contactHeader = document.querySelector(".contact h4");
// const contactText = document.querySelectorAll(".contact p");

// const footerText = document.querySelector("footer a");

// const logo = document.querySelector("#logo-img");
// const ctaImg = document.querySelector("#cta-img");
// const accentImg = document.querySelector("#middle-img");

// //Text Content

// nav[0].textContent = "Services";
// nav[1].textContent = "Product";
// nav[1].textContent = "Product";
// nav[2].textContent = "Vision";
// nav[3].textContent = "Features";
// nav[4].textContent = "About";
// nav[5].textContent = "Contact";

// header.textContent = "DOM Is Awesome";
// headerButton.textContent = "Get Started"

// topHeaders[0].textContent = "Features";

// bottomP[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
// bottomP[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// contactHeader.textContent = "Contact";

// contactText[0].textContent = "123 Way 456 Street Somewhere, USA";
// contactText[1].textContent = "1 (888) 888-8888";
// contactText[2].textContent = "sales@greatidea.io";

// footerText.textContent = "Copyright Great Idea! 2021";

// //Class names

// footerText.className = "bold";
// nav[0].className = "italic";
// nav[1].className = "italic";
// nav[2].className = "italic";
// nav[3].className = "italic";
// nav[4].className = "italic";
// nav[5].className = "italic";




// Images

logoImg.src = "http://localhost:9000/img/logo.png";
ctaImg.src = "http://localhost:9000/img/cta.png";
accentImg.src = "http://localhost:9000/img/accent.png";
