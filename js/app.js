'use strict';

const burgerToolBar = document.querySelector('.menu_icons');
const navigationLinks = document.querySelector('.menu ul');
const menu = document.querySelector('.menu');
const header = document.querySelector('header');
const buttonClickCollect = document.querySelector('div.header-end button');
let toggler = 0;

document.addEventListener('DOMContentLoaded',()=>{
    burgerToolBar.addEventListener('click',()=>{
        if((toggler === 0)){
            if(burgerToolBar.classList.contains('noRotate')){
                burgerToolBar.classList.replace('noRotate','rotate');
            }
            else{
                burgerToolBar.classList.add('rotate');
            }
            buttonClickCollect.style.display="flex";
            header.style.flexDirection="column";
            menu.style.flexDirection ="column";
            navigationLinks.style.display = "flex";
            navigationLinks.style.flexDirection = "column";
            toggler = 1;
        }
        else{
            burgerToolBar.classList.replace('rotate','noRotate');
            navigationLinks.style.display ="none";
            menu.style.flexDirection ="row";
            navigationLinks.style.flexDirection = "row";
            toggler = 0;
        }
    })

    window.addEventListener('resize',()=>{
        if(window.matchMedia("(min-width:769px)").matches){
            navigationLinks.style.display ="flex";
            header.style.flexDirection="row";
            menu.style.flexDirection ="row";
            navigationLinks.style.flexDirection ="row";
            toggler = 0;
        }
        else{
            if((toggler === 0)){
                burgerToolBar.classList.replace('rotate','noRotate');
                navigationLinks.style.display ="none";
            }
            else{
                header.style.flexDirection="column";
                menu.style.flexDirection ="column";
                navigationLinks.style.display = "flex";
                navigationLinks.style.flexDirection = "column";
            }
            
        }
    })
  
});