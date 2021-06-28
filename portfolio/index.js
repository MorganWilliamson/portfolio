// Sticky Navbar
const nav = document.querySelector('#navbar');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');    
  }
}

window.addEventListener('scroll', fixedNav);

///// Contact Form /////
const form = document.getElementById("contact-form");

// Event handler
const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  let mail = new FormData(form);

  sendMail(mail);
})

const sendMail = (mail) => {
  // base url
  fetch("url goes here", {
    method: "post", // POST data to the server
    body: mail, // mail, because we're sending data
  })
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    console.log(err);
  })
}
