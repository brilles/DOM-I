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
    h1: "DOM<br/> Is<br/> Awesome",
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
    address: "123 Way 456 Street<br/> Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// IMGS
document.getElementById("logo-img").src = siteContent["nav"]["img-src"];
document.getElementById("cta-img").src = siteContent["cta"]["img-src"];
document.getElementById("middle-img").src = siteContent["main-content"]["middle-img-src"];

//NAV
navItems = document.querySelectorAll("a");
for (i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
}
navItems.forEach(e => (e.style.color = "green"));

let navNode = document.createElement("a");
let navNodeText = document.createTextNode("Log In");
navNode.appendChild(navNodeText);
document.querySelector("nav").appendChild(navNode);

let navNode2 = document.createElement("a");
let navNodeText2 = document.createTextNode("Clients");
navNode2.prepend(navNodeText2);
document.querySelector("nav").prepend(navNode2);
navNode.style.color = "green";
navNode2.style.color = "green";

// let links = document.querySelectorAll("header nav a");
// let navigation = document.querySelector("nav");

// // links[0].textContent = siteContent["nav"]["nav-item-1"];
// // links[1].textContent = siteContent["nav"]["nav-item-2"];

// for (var i = 0; i < links.length; i++) {
//   links[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
// }

// links.forEach(e => (e.style.color = "green"));
// let extra1 = (document.createElement("a").textContent = "Clients");
// navigation.prepend(extra1);

// let navNode = document.createElement("a");
// let textNavNode = document.createTextNode("Log In");

// navNode.appendChild(textNavNode);
// navigation.appendChild(navNode);

// navigation.style.color = "green";
// navNode.style.color = "green";



//CTA
document.querySelector("h1").innerHTML = siteContent["cta"]["h1"];
document.querySelector("button").textContent = siteContent["cta"]["button"];

document.querySelector("button").addEventListener("click", function() {
  document.querySelector(".cta-text ").textContent = "Button Clicked!";
});

//MAIN CONTENT
document.querySelector(".top-content").firstElementChild.querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
document.querySelector(".top-content").lastElementChild.querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
document.querySelector(".top-content").firstElementChild.querySelector("p").textContent = siteContent["main-content"]["features-content"];
document.querySelector(".top-content").lastElementChild.querySelector("p").textContent = siteContent["main-content"]["about-content"];
document.querySelector(".bottom-content").firstElementChild.querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
document.querySelector(".bottom-content").children[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
document.querySelector(".bottom-content").lastElementChild.querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];

document.querySelector(".bottom-content").firstElementChild.querySelector("p").textContent = siteContent["main-content"]["services-content"];
document.querySelector(".bottom-content").children[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];
document.querySelector(".bottom-content").lastElementChild.querySelector("p").textContent = siteContent["main-content"]["vision-content"];

//CONTACT
document.querySelector(".contact").firstElementChild.textContent = siteContent["contact"]["contact-h4"];
document.querySelector(".contact").children[1].innerHTML = siteContent["contact"]["address"];
document.querySelector(".contact").children[2].textContent = siteContent["contact"]["phone"];
document.querySelector(".contact").lastElementChild.textContent = siteContent["contact"]["email"];
//FOOTER

document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];