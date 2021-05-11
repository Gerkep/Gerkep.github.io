function myFunction() {
    document.getElementById("email").classList.toggle("show");
    document.getElementById("tel").classList.toggle("show");
    document.getElementById("contact-btn").classList.toggle("rotate");
  }

document.getElementById("dropdown").addEventListener('click',function(event){
    event.stopPropagation();
});