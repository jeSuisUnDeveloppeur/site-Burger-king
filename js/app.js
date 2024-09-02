'use strict'

let burgerToolBar = document.querySelector('.menu_icons');
let navigationLinks = document.querySelector('.menu ul');
let menu = document.querySelector('.menu');
let header = document.querySelector('header');
let logo = document.querySelector
let toggler = 0;

document.addEventListener('DOMContentLoaded',()=>{
    burgerToolBar.addEventListener('click',()=>{
        if((toggler == 0)){
            header.style.flexDirection="column";
            menu.style.flexDirection ="column";
            navigationLinks.style.display = "flex";
            navigationLinks.style.flexDirection = "column";
            toggler = 1;
        }
        else{
            navigationLinks.style.display ="none";
            menu.style.flexDirection ="row";
            navigationLinks.style.flexDirection = "row";
            toggler = 0;
        }
    })

})