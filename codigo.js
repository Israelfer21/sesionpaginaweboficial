//////console.log("se carga el codigo");
window.addEventListener("DOMContentLoaded",(event)=>{
     console.log("DOM completamos cargado y procesado");
    const menuBtn=document.getElementById("menu");
const nav=document.querySelector(" header nav");
menuBtn.addEventListener("click",(event)=>{
menuBtn.classList.toggle("salir");
nav.classList.toggle("visible");
});
});
