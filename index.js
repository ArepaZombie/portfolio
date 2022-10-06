let screensize = window.innerHeight;
let sections = ["about","skills","projects","contact"].map((section)=>document.getElementById(section))


function effect(x){
  let children = x.children;

  if(x.getBoundingClientRect().top+200 < screensize) {
    for(let child of children){
      child.classList.add('show');
    }
  }else{
    for(let child of children){
      child.classList.remove('show');
    }
  }
}

function show_hero(){
  let pinks = document.getElementsByClassName('pink-hero');
  pinks[0].classList.add('showp')
  pinks[1].classList.add('showp')
}

window.addEventListener('scroll',() => sections.map(section => effect(section)));
show_hero()