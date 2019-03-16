let shaped1 = document.getElementsByClassName("shaped1")[0];
let shaped2 = document.getElementsByClassName("shaped2")[0];
let container = document.getElementsByClassName("container")[0];

shaped1.addEventListener("mouseover", () => {
    shaped2.style.clipPath = "polygon(60% 0, 100% 0, 100% 100%, 20% 100%)";
})
shaped2.addEventListener("mouseover", () => {
    shaped2.style.clipPath = "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)";
})
container.addEventListener("mouseout", function () {
    shaped2.style.clipPath = "polygon(50% 0, 100% 0, 100% 100%, 10% 100%)";
})