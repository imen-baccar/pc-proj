// Array.from(document.getElementsByClassName("exa")).map((el) => {
//     el.lastChild.addEventListener('click', () => console.log(el))

// })
// const panierList=JSON.parse(localStorage.getItem("panier")) || []
// console.log(panierList)

let exa = Array.from(document.getElementsByClassName("exa"))
let prices = Array.from(document.getElementsByClassName("law"))
let name= Array.from(document.getElementsByClassName("size"))
let btn= Array.from(document.getElementsByClassName("buy-btn"))

btn.map((el, i) => el.addEventListener("click", () => { let p = JSON.parse(localStorage.getItem("panier") )|| []; localStorage.setItem("panier", JSON.stringify([...p,exa[i].outerHTML]))}))