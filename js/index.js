const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Links
const links = document.querySelectorAll('a');

links.forEach((currentValue, i) => {
  currentValue.textContent = Object.values(siteContent.nav)[i]
})

// CTA
const action = document.querySelectorAll('.cta-text *')

action.forEach((item, i) =>{
  item.textContent= Object.values(siteContent.cta)[i]
})



const headerImg = document.getElementById("cta-img");

headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

// const button = document.getElementsByClassName('button .cta-text').textContent;

// button.textContent()

// var x = document.getElementById("myBtn").textContent;

// Main-Content 

const main = document.querySelectorAll('.text-content');

main[0].textContent = ('p', siteContent['main-content']['features-content']);

main[1].textContent = ('p', siteContent['main-content']['about-content']);

main[2].textContent = ('p', siteContent['main-content']['services-content']);

main[3].textContent = ('p', siteContent['main-content']['vision-content']);

const bigImg = document.querySelector('.middle-img');

bigImg.setAttribute('src', siteContent['main-content']["middle-img-src"]);

// Features 

const features = document.querySelectorAll('h4 .text-content');

features.forEach((item, i) =>{
  item.textContent = Object.values(siteContent.main-content[i])
});

// features.forEach((item, i) =>{
//   item.textContent = ('h4', siteContent.main-content[0]);
// })

// features[0].textContent = ('h4', siteContent['main-content']['features-h4']);
