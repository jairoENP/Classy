window.addEventListener("scroll",function(){
    let header = this.document.querySelector("nav");
    header.classList.toggle("sticky",this.window.scrollY > 0);
})

const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.portada__menu');
const hamburguesa__a1 = document.querySelector('#opcion-1');
const hamburguesa__a2 = document.querySelector('#opcion-2');
const hamburguesa__a3 = document.querySelector('#opcion-3');

hamburguesa.addEventListener('click',() => {
    menu.classList.toggle('portada__menu--activado')
})

hamburguesa__a1.addEventListener('click',() => {
    menu.classList.toggle('portada__menu--activado')
})

hamburguesa__a2.addEventListener('click',() => {
    menu.classList.toggle('portada__menu--activado')
})

hamburguesa__a3.addEventListener('click',() => {
    menu.classList.toggle('portada__menu--activado')
})