const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM<br/> Is<br/>Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street <br/> Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

//---------------------------------header---------------------------------
let links = document.querySelectorAll("header nav a");
let navigation = document.querySelector("nav");

// links[0].textContent = siteContent["nav"]["nav-item-1"];
// links[1].textContent = siteContent["nav"]["nav-item-2"];

for (var i = 0; i < links.length; i++) {
  links[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
}
links.forEach(e => (e.style.color = "green"));
let extra1 = (document.createElement("a").textContent = "Clients");
navigation.prepend(extra1);

let navNode = document.createElement("a");
let textNavNode = document.createTextNode("Log In");

navNode.appendChild(textNavNode);
navigation.appendChild(navNode);

navigation.style.color = "green";
navNode.style.color = "green";

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//---------------------------------cta---------------------------------

let ctaH1 = (document.querySelector("h1").innerHTML = siteContent.cta.h1);

let ctaBtn = (document.querySelector(".cta-text button").textContent =
  siteContent.cta.button);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//---------------------------------main-content---------------------------------
let topContent = document.querySelector(".top-content");

let botContent = document.querySelector(".bottom-content");

let mC = "main-content";

//top
topContent.children[0].querySelector("h4").textContent =
  siteContent[mC]["features-h4"];
topContent.children[0].querySelector("p").textContent =
  siteContent[mC]["features-content"];

topContent.children[1].querySelector("h4").textContent =
  siteContent[mC]["about-h4"];
topContent.children[1].querySelector("p").textContent =
  siteContent[mC]["about-content"];

//middle
let middleImg = document
  .getElementById("middle-img")
  .setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//bottom
botContent.children[0].querySelector("h4").textContent =
  siteContent[mC]["services-h4"];
botContent.children[0].querySelector("p").textContent =
  siteContent[mC]["services-content"];

botContent.children[1].querySelector("h4").textContent =
  siteContent[mC]["product-h4"];
botContent.children[1].querySelector("p").textContent =
  siteContent[mC]["product-content"];

botContent.children[2].querySelector("h4").textContent =
  siteContent[mC]["vision-h4"];
botContent.children[2].querySelector("p").textContent =
  siteContent[mC]["vision-content"];

//---------------------------------contact---------------------------------

let contactS = document.querySelector(".contact");

contactS.children[0].textContent = siteContent["contact"]["contact-h4"];
contactS.children[1].innerHTML = siteContent.contact.address;
contactS.children[2].textContent = siteContent.contact.phone;
contactS.children[3].textContent = siteContent.contact.email;

//---------------------------------FOOTER---------------------------------

let footer = (document.querySelector("footer p").textContent =
  siteContent.footer.copyright);
