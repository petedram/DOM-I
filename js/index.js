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

const codeImage = document.getElementById('cta-img');
codeImage.setAttribute('src', siteContent['cta']['img-src']);

const navArray = document.querySelectorAll('a');
navArray[0].textContent = (siteContent['nav']['nav-item-1']);
navArray[1].textContent = (siteContent['nav']['nav-item-2']);
navArray[2].textContent = (siteContent['nav']['nav-item-3']);
navArray[3].textContent = (siteContent['nav']['nav-item-4']);
navArray[4].textContent = (siteContent['nav']['nav-item-5']);
navArray[5].textContent = (siteContent['nav']['nav-item-6']);

Array.from(navArray).forEach((link) => {
  link.style.color = 'green';
});


const newPrependContent = document.createElement("a");
newPrependContent.textContent = 'Hello';
newPrependContent.setAttribute('href', '#');
newPrependContent.style.color = 'green';


const newAppendContent = document.createElement("a");
newAppendContent.textContent = 'World';
newAppendContent.setAttribute('href', '#');
newAppendContent.style.color = 'green';

const parentElement = document.querySelector('nav');
parentElement.prepend(newPrependContent);
parentElement.appendChild(newAppendContent);



const ctaH1 = document.querySelectorAll('h1');
ctaH1[0].textContent = (siteContent['cta']['h1']);

const button = document.querySelectorAll('button');
button[0].textContent = (siteContent['cta']['button']);

const middleImage = document.getElementById('middle-img');
middleImage.src = (siteContent['main-content']['middle-img-src']);

const h4Content = document.querySelectorAll('.main-content h4');
h4Content[0].textContent = (siteContent['main-content']['features-h4']);
h4Content[1].textContent = (siteContent['main-content']['about-h4']);
h4Content[2].textContent = (siteContent['main-content']['services-h4']);
h4Content[3].textContent = (siteContent['main-content']['product-h4']);
h4Content[4].textContent = (siteContent['main-content']['vision-h4']);

const topContent = document.querySelectorAll('.main-content p');
topContent[0].textContent = (siteContent['main-content']['features-content']);
topContent[1].textContent = (siteContent['main-content']['about-content']);
topContent[2].textContent = (siteContent['main-content']['services-content']);
topContent[3].textContent = (siteContent['main-content']['product-content']);
topContent[4].textContent = (siteContent['main-content']['vision-content']);

const h4Contact = document.querySelector('.contact h4');
h4Contact.textContent = (siteContent['contact']['contact-h4']);

const pContact = document.querySelectorAll('.contact p');
pContact[0].textContent = (siteContent['contact']['address']);
pContact[1].textContent = (siteContent['contact']['phone']);
pContact[2].textContent = (siteContent['contact']['email']);

const pFooter = document.querySelector('footer p');
pFooter.textContent = (siteContent['footer']['copyright']);

const contactWidth = document.querySelector('.contact');
contactWidth.style.width = '200px';
