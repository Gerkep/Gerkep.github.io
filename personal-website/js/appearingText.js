var appearingText = document.querySelector(".below-mainTxt .scroll-text .appear-text");

window.onscroll = function(){appearingText.style.display = "none";}

function doSetTimeout(i) {
    setTimeout(function() { appearingText.classList.toggle("appear"); }, 1100*i);
}
      
for (var i = 1; i <= 10000; i++)
    doSetTimeout(i);