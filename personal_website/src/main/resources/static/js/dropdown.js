function myFunction() {
    document.getElementById("email").classList.toggle("show");
    document.getElementById("tel").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.button')) {

        var sharedowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < sharedowns.length; i++) {
            var openSharedown = sharedowns[i];
            if (openSharedown.classList.contains('show')) {
                openSharedown.classList.remove('show');
            }
        }
    }
}

document.getElementById("myDropdown").addEventListener('click',function(event){
    event.stopPropagation();
});