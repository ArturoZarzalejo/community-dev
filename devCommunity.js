import viteLogo from '/vite.svg'
import javascriptLogo from './javascript.svg'

export function devCommunity(element) {
  devHTML(element)

  // printDevelopers()

}

const developers = [{
  img: '/imgs/manz-twitter.jpg',
  name: '@ManzDev',
  HTMLContent: `
  <p> 
  <span>
  👨‍💻 Dev/Engineer http://manz.dev
  🎙 Streamer http://twitch.tv/ManzDev
  🎥 Vids http://youtube.com/@ManzDev
  🎓 Teacher FullStack at 
  @eoi
  
  ✨I❤️Web Development
  💬 «Odio quedarme a med
  </span>

  Africano de corazón, profesor, muyayo, pollaboba, "apodado" el creador de CSS, 
  creador de 6 consolas en CSS (Está completamente loco y chalado), sus streams son maravillosos, 
  él ayuda a la comunidad, tiene cursos gratuitos de todo el panorama Front End y odia React & Tailwind
  Dice que React la chupa
  
  </p>`
},
{
  img: '/imgs/arturo-cerdo.png',
  name: '@ArturoDevelop',
  HTMLContent: `
  <p> 
  <span>
    Creador de Community Developers Web, Javascript Tech, gordito, quejica, llorón y friki, también gamer.
  </span>
  

  Friki que no sabe programar, tiene más cuentas que el xokas. 
  La viva imagen de 'la de trabajar te la sabes??' Vendehumos a tiempo completo que copia codigo con una mano mientras con la otra se arregla el pelazo, 
  propone chumbimba sin éxito y diariamente está cuajado
  Para más, ver en directo
  
  </p>`
},
{
  img: '/imgs/midu-feliz-twitter.jpg',
  name: '@Midudev',
  HTMLContent: `
  <p> 
  <span>
  👨‍💻 Ingeniero de Software & JavaScript
  ⭐ GitHub Star · Google Dev Expert · Microsoft MVP
  🔴 Twitch Partner: http://twitch.tv/midudev
  🗣️ Discord: http://discord.gg/midudev
  </span>

  MiduGod, Catalan, streamer número 1 hispanohablante sobre desarrollo de software, 
  dice que los programadores que no tienen proyectos en Github no valen para nada 
  y que la universidad es completamente inútil y la chupan todos los que han ido 
  él ha ido y os da mil vueltas a todos, bobos
  </p>`
},
{
  img: '/imgs/todo-code-joven.jpg',
  name: '@TodoCode',
  HTMLContent: `
  <p> 
  <span>
  Donde aprender informática de forma sencilla, sin palabras complicadas. 
  ▶️Youtube: http://bit.ly/36laFi8
  📸Instagram: http://bit.ly/3mpuRVF
  🔴Twitch: http://bit.ly/3I8st3d
  </span>

  Argentina, profesora, fullstack, le encanta Java y lo demás es una mierda, sabe de microservicios
  y toma todo el día tereré, yo creo que está un poquito tururú,
  Compra en cuevas argentinas, cuando va por la calle dice "cambio cambio cambio cambio" 
  y le encantan los climas tropicales
  </p>`
},
{
  img: '/imgs/afor-platano.png',
  name: '@Afor_digital',
  HTMLContent: `
  <p> 
  <span>
  a veces hago como que programo en http://twitch.tv/afor_digital

  </span>

  Valenciana tetica, amante de la cerveza y de React & Tailwind, reza a Manz por las tardes 
  podrás encontrarla en cualquier lugar con cerveza y sol, habla a velocidades nunca vistas, 
  los espectadores no saben si está hablando o rapeando, hace concursillos como illojuan y de vez en cuando 
  te insulta si le enseñas tu página web o tu linkedin de forma "constructiva" pero ella disfruta
  
  </p>`
},
{
  img: '/imgs/moure-feliz-twitter.png',
  name: '@MoureDev',
  HTMLContent: `
  <p> 
  <span>
  💻 Freelance full-stack Dev 
  📲 iOS & Android Engineer 
  📚 Te enseño programación 
  📺 YouTube, Twitch, Discord & Elgato Partner 
  👥 Microsoft MVP & GDG 🔗 http://moure.dev

  </span>

  Galleguiño oh Neno, de vez en cuando suelta algún carallo en stream o apúrate neno, se ve que 
  prefiere los festivales a la programación, escribió un libro de Git y Github, decidió cambiar a moure v2 porque moure v1 la chupaba, 
  actualmente como freelance y creador de contenido TOP
  </p>`
},
{
  img: '/imgs/matias-feliz-twitter.jpg',
  name: '@MatiasBaldanza',
  HTMLContent: `
  <p> 
  <span>
    Ridiculously enthusiastic nerd
    Front-end dev (React) - Former IT person / teacher / translator.
    Re-learning to code Mo-Fri @ http://twitch.tv/matiasbaldanza
  </span>

  Profesor de inglés, argentino, IT Boy, +80 años de experiencia y de vida, 
  quiere aprender programación antes de diñarla por si en el infierno toca programar tener un buen salario
  aprende en directo y la verdad tiene las mejores explicaciones de todos los creadores de contenido, 
  algunos dicen que parece una IA
  </p>`
}
];


const devHTML = element => element.innerHTML = `
  <ul class="list-developers">
    ${developers.map((developer) => `
    <li>
    <figure>
    <img src="${developer.img}" />
  </figure>
  <div>
    <span class="content-creator-name">${developer.name}</span>
    ${developer.HTMLContent}
  </div>
  </li>
  `).join("")}
`