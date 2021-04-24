const slide = document.getElementById("my-work")
const back = document.getElementById("back-work")


function workAppear(){
    slide.classList.toggle("slide-in");
    back.classList.toggle("slide-in");
}

function workDisappear(){
    document.getElementById("my-work").classList.remove("slide-in");
}