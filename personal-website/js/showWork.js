const button = document.getElementById("my-work")


function workAppear(){
    button.classList.toggle("slide-in");
}

function workDisappear(){
    document.getElementById("my-work").classList.remove("slide-in");
}