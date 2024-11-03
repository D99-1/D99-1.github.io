
AOS.init();

window.addEventListener('scroll', e => {
	if (document.documentElement.scrollTop > 20) {
		const nav = document.getElementById('nav')
		nav.style.backgroundColor = 'rgba(0,0,0,0.5)'
		nav.style.backdropFilter = 'blur(5px)'
	} else {
		document.getElementById("nav-wrapper").className.add = "nav-wrapper-custom";
		nav.style.boxShadow = 'inset 0 -1px 0 0 hsla(0,0%,100%,0.1)'
		nav.style.backgroundColor = 'transparent'
	}
})

const tips = [
	{
		query: '#stackOverflow',
		content: 'Stack Overflow',
	},
	{
		query: '#github',
		content: 'Github',
	},
];

for (const { query, content } of tips) {
	tippy(query, { content })
}


const sr = ScrollReveal({
	origin: 'bottom',
	distance: '60px',
	duration: 1000,
	delay: 400
})

const ops = { interval: 100 }
const fastOps = {interval:50}

sr.reveal('.head, .paragraph, .hero-button', ops);
sr.reveal('.icon', ops);
sr.reveal(".about-title, .about-img, .about-text, .about-description.grey", ops);
sr.reveal('.stats-item, .stats-item2', ops);
sr.reveal('.project-content, .m-project-content, .card, .endpoints, .ecards', ops);
// Projects

const container = document.querySelector('.project-content');
const mContainer = document.querySelector('.m-project-content');

projects.forEach((project) => {
	container.innerHTML +=
		`<div class="card" onClick="">
			<div class="card-content">
			<h3 class="card-heading">${project.name}</h3>
			<p class="card-description">${project.description}</p>
			<div class="buttons">
			  <button onclick="window.open('${project.url}', '_blank')" class="card-button">Visit&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i></button>
			</div>
			</div>
  		</div>`
})
projects.forEach((project) => {
	mContainer.innerHTML +=
`

<div class="card" id="${project.name}" onClick="clicked(this)">
<div class="row-div">
  <label for="collapsible" class="lbl-toggle">${project.name}</label>
  </div>
  </div>

`
})
function clicked(elem){
	let id = elem.id
	let item = document.getElementById(id)
	let rawData = projects.find(({ name }) => name === id);
	let extended = `
	<div class="card-content" id="${rawData.name}-unCollapsed">
	<div style="display="flex"; flex-direction="row"">
	<h3 class="card-heading">${rawData.name} </h3>
	</div>
	<p class="card-description">${rawData.description}</p>
	<div class="buttons">
	  <button onclick="window.open('${rawData.url}', '_blank')" class="card-button">Visit&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i></button>
	</div>
	</div>
  `
  let short = `
	<label for="collapsible" class="lbl-toggle">${rawData.name} </label>
  `
  const uncollap = document.getElementById(`${rawData.name}-unCollapsed`)
	if (uncollap){
	item.innerHTML = short
	} else{
		item.innerHTML = extended
	}


}

// Nav

const links = document.querySelectorAll(".nav-link");
Array.from(links).forEach(link => {
	if (link.getAttribute('data-scroll')) {
		link.onclick = () => {
    mobileNav.classList.toggle('open')
    bars[0].style.transform = 'rotate(0deg)'
		bars[1].style.opacity = '1'
		bars[2].style.transform = 'rotate(0deg)'
		isActive = false
      window.scrollTo({ top: document.querySelector(link.getAttribute("data-scroll")).offsetTop-80, behavior: 'smooth' })
	}
  }
})
window.addEventListener('resize', add)
function add() {
	if (window.innerWidth < 900) {
		document.body.classList.add('mobile')
    	mobileNav.classList.remove('open')
	} else {
		document.body.classList.remove('mobile')
	}
}
window.onload = add;
let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')
let bars = document.querySelectorAll('.hamburger span')
let isActive = false
hamburger.addEventListener('click', function () {
	mobileNav.classList.toggle('open')
	if (!isActive) {
		bars[0].style.transform = 'rotate(45deg)'
		bars[1].style.opacity = '0'
		bars[2].style.transform = 'rotate(-45deg)'
		isActive = true
	} else {
		bars[0].style.transform = 'rotate(0deg)'
		bars[1].style.opacity = '1'
		bars[2].style.transform = 'rotate(0deg)'
		isActive = false
	}
})


// Typing animation
var typing=new Typed(".typing-text", {
  strings: [ "JavaScript", "NodeJS","React Native","HTML", "CSS","Python"],
  typeSpeed: 80,
  backSpeed: 75,
  loop: true,
  backDelay: 500,

});

// API Endpoints
for (const endpoint of endpoints) {
	const div = document.getElementById("endpoints");
	div.innerHTML += ` <div  class="ecard">
		<div class="box">
			<div class="card-content">
				<h3>${endpoint.endpoint}</h3>
				<p>
					${endpoint.description}
				</p>
				<a target="_blank" href="${endpoint.link}">Link</a>
			</div>
		</div>
	</div>`
  }

function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};