

// Menu hamburguer - mobile

let menu = document.querySelector("#menu-icon");

let navBar = document.querySelector("#nav-bar");

menu.onclick = () =>{
    navBar.classList.toggle("active");
}

window.onscroll = () =>{
    navBar.classList.remove("active");
}
// Fim Menu hamburguer - mobile

// Carrossel
let contador = 1

document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage()
},4000);

function nextImage(){
    contador++;
    if(contador > 4){
        contador=1;
    }
    document.getElementById("radio"+contador).checked = true;
}
// Fim Carrossel

// Login Page

const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms"> ${letter}</span>`)
        .join('')
})

// Fim Login Page

