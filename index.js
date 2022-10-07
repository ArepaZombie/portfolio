/*LAS ANIMACIONES*/
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

/*PARA EL FILTRO DE SKILLS*/
let pSkills = Array.from(document.getElementById("skills-container").children);
let arrSkills = []
pSkills.map(skill=>Array.from(skill.children).map(child => arrSkills.push(child)))

let skillNav = Array.from(document.querySelector('#skills-nav ul').children)

function filtrar(categoria){
  skillNav.map(nav=>{
    if(nav.id==categoria){
      nav.classList.add('selected')
    }
    else{
      nav.classList.remove('selected')
    }
  })

  arrSkills.map(skill => {
    if (categoria=='a'){
      skill.classList.remove('skill-out')
    }
    else if (skill.classList[0]!=categoria){
      skill.classList.add('skill-out')
    }
    else{
      skill.classList.remove('skill-out')
    }
  })
}

document.getElementById('a').setAttribute('onclick','filtrar("a")')
document.getElementById('tool').setAttribute('onclick','filtrar("tool")')
document.getElementById('lang').setAttribute('onclick','filtrar("lang")')
document.getElementById('soft').setAttribute('onclick','filtrar("soft")')