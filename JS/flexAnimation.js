const panel = document.querySelectorAll('.panel');
let flag1 = false;

panel.forEach(p => p.addEventListener('click',toggleClicked2Class));
panel.forEach(p => p.addEventListener('transitionend',toggleClickedClass));

function toggleClicked2Class(){
    if(!flag1){
        this.classList.toggle('clicked2');
        flag1=true;
    }
}

function toggleClickedClass(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('clicked');
        flag1=false;
    }
}
