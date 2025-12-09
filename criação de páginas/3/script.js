let foto1 = document.getElementById("1")
let foto2 = document.getElementById("2")
let foto3 = document.getElementById("3")
let foto4 = document.getElementById("4")
let foto5 = document.getElementById("5")
let zoom = document.getElementById("zoom")

foto1.addEventListener("mouseover", () => {
    zoom.src = foto1.src
    zoom.style.border = "2px solid black"
})
foto2.addEventListener("mouseover", () => {
    zoom.src = foto2.src
    zoom.style.border = "2px solid black"
})
foto3.addEventListener("mouseover", () => {
    zoom.src = foto3.src
    zoom.style.border = "2px solid black"
})
foto4.addEventListener("mouseover", () => {
    zoom.src = foto4.src
    zoom.style.border = "2px solid black"
})
foto5.addEventListener("mouseover", () => {
    zoom.src = foto5.src
    zoom.style.border = "2px solid black"
})