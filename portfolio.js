window.onscroll = function() {stickynav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickynav() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }      
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides-fade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName(){
  var name = document.getElementById('contact-name').value;
  if (name.length==0){
    nameError.innerHTML = 'Name required';
    return false;
  }
  nameError.innerHTML='<i style="color:green" class = "fas fa-check-circle"></i>';
  return true;
}
function validateEmail(){
  var email = document.getElementById('contact-email').value;
  if (email.length==0){
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Email invalid'
    return false;
  }
  emailError.innerHTML = '<i style="color:green" class = "fas fa-check-circle"></i>';
  return true;
}
function validateMessage(){
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required -message.length;
  if (left>0){
    messageError.innerHTML=left +' more characters required';
    return false;
}
  messageError.innerHTML = '<i style="color:green" class = "fas fa-check-circle"></i>';
  return true;
}
function validateForm(){
  if(!validateName() || !validateEmail() || !validateMessage()){
    submitError.style.display="block";
    submitError.innerHTML = 'Please fill the required form';
    return false;
  }

}