const btn = document.querySelectorAll('.btn');
const overlay = document.querySelector('.overlay');
const module_1 = document.querySelector('.module_1');
const close_btn = document.querySelectorAll('.close_btn');
console.log(close_btn);
function addModule() {
    module_1.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function removeModule() {
    module_1.classList.add('hidden');
    overlay.classList.add('hidden');
}
for(let i=0; i < btn.length; i++) {
    btn[i].addEventListener('click', addModule);
}

for(let i=0; i < close_btn.length; i++) 
close_btn[i].addEventListener('click', removeModule);
