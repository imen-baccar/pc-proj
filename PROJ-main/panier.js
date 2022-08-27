let list =  JSON.parse(localStorage.getItem("panier"))

let container = document.querySelectorAll('.product-list-panier')[0]
let div=document.createElement('div')
div.innerHTML=list
container.appendChild(div)

var btn = document.querySelectorAll(".buy-btn")
console.log(btn)
for(let i = 0 ; i<btn.length;i++){
    btn[i].innerHTML="Delete"
    btn[i].addEventListener("click",function(){
        btn[i].parentElement.parentElement.remove()
    })
}