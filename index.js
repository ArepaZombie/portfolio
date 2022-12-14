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

/*PARA EL AREA DE PROJECT */

function Description(){
  let [projectIndx, setProjectIndx]=React.useState(0);
  
  /*PONER EL TITULO DENTRO DE PROJECTS Y GENERAR UNA SERIE DE LISTAS PARA MEJOR LECTURA */
  projects = [
    {title:'Album display',
    lang:'JavaScript - React',
    desc:'SAP tha display different albums stored in the localStorage, uses the Spotify API',
    link:'https://arepazombie.github.io/album-display/'},
    {title:'Game Table',
    lang:'JavaScript - React',
    desc:'A simple collection for different little table games made in React.js',
    link:'https://arepazombie.github.io/arepa-juegos/'},
    {title:'Manga Store',
    lang:'HTML/CSS - JavaScript - React',
    desc:'This is a group work. We are making a manga web store for our institute.',
    link:'https://arepazombie.github.io/MangaZombie/'},
    {title:'drum machine',
    lang:'HTML/CSS - JavaScript - React',
    desc:'A web drum machine with a cyberpunk style.',
    link:'https://codepen.io/arepazombie/full/poVdjdE'},
    {title:'quiz app',
    lang:'HTML/CSS - JavaScript - React',
    desc:'A simple gamer quiz app made for the React course in scrimba',
    link:'https://codepen.io/arepazombie/full/zYjmBxE'},
    {title:"React quote app",
    lang:'HTML/CSS - JavaScript - React',
    desc:'App that shows a random quote and allows you to tweet the quote',
    link:'https://codepen.io/arepazombie/full/dyeRydP'},
    {title:'portfolio 1.0',
    lang:'HTML/CSS',
    desc:'My first portfolio... I am very proud of this one',
    link:'https://arepazombie.github.io/portfolio-01/'},
  ]

  function selectProject(a){
    setProjectIndx(a);
  }
  let listProjects = []
  for (let i=0;i<=5;i++){
    listProjects.push(<li><p 
      class={`project ${projectIndx==i&&'project-selected'}`}
      onClick={()=>selectProject(i)}>
        {projects[i].title}
        </p></li>)
  }
  
  return (  
  
  <div id='papp'>
    <ul class="hideLeft" id="list-projects">
      {listProjects}
    </ul> 

    <div class="hideRight" id="project-description-box">
      <h3 id="project-title">{projects[projectIndx].lang}</h3>
      <p id="project-description">{projects[projectIndx].desc}</p>
      <a href={projects[projectIndx].link} target="_blank" rel="noopener noreferer" id="project-link">Link</a>
    </div>
  </div>
  )
}




let projects = ReactDOM.createRoot(document.getElementById('projects-app'))
projects.render(<Description />)
