const containers = document.querySelectorAll(".container");
const options = {
    threshold: 0,
    rootMargin: "-100px"
};


const observer = new IntersectionObserver(function(entries, observer){
entries.forEach(entry => {
    if(!entry.isIntersecting){
        return;
    }
    console.log(entry.target);
    entry.target.classList.toggle("effect");
    observer.unobserve(entry.target);
});
}, options);

containers.forEach(container => {
    observer.observe(container);
})