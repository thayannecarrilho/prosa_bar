let menu = document.querySelector("#menu-icon");

let navBar = document.querySelector("#nav-bar");

menu.onclick = () =>{
    navBar.classList.toggle("active");
}

window.onscroll = () =>{
    navBar.classList.remove("active");
}


