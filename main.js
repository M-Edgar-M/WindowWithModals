'use strict';
const btn = document.querySelectorAll('.btn');
const overlay = document.querySelector('.overlay');
const module_1 = document.querySelector('.module_1');
const module_2 = document.querySelector('.module_1');
const module_3 = document.querySelector('.module_1');
const close_btn = document.querySelectorAll('.close_btn');
// function addModule() {

//         module_1.classList.remove('hidden');
//         overlay.classList.remove('hidden');
// }

function removeModule() {
    module_1.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i=0; i < btn.length; i++) {
    if(btn[i].classList.item(1) === 'btn1') {
        btn[i].addEventListener('click', () => {
            module_1.classList.remove('hidden');
            overlay.classList.remove('hidden');
        })
    }
     else if(btn[i].classList.item(1) === 'btn2') {
            btn[i].addEventListener('click', () => {
            module_2.classList.remove('hidden');
            overlay.classList.remove('hidden');
            })
     } else if(btn[i].classList.item(1) === 'btn3') {
        btn[i].addEventListener('click', () => {
            module_3.classList.remove('hidden');
            overlay.classList.remove('hidden');
        })
     }
    // btn[i].addEventListener('click', addModule);
    //console.log(btn[i].classList.item([1]));
}

for(let i=0; i < close_btn.length; i++) 
close_btn[i].addEventListener('click', removeModule);


window.addEventListener('keydown', (el) => {
    if(el.code === 'Enter') {
        removeModule();
    }
});
overlay.addEventListener('click', removeModule);