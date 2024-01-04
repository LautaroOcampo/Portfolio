window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});


document.querySelector('#español').addEventListener('click',() => {
    document.querySelectorAll('nav ul a')[0].innerText = 'Sobre mí'
    document.querySelectorAll('nav ul a')[1].innerText = 'Proyectos'
    document.querySelectorAll('nav ul a')[2].innerText = 'Contacto'
    document.querySelector('.about-section h3').innerText = 'SOBRE MÍ'
    document.querySelector('.about-section p').innerText = 'Soy Lautaro Ocampo, un desarrollador front-end con experiencia en plataformas de comercio electrónico como Shopify, MercadoShops, TiendaNube, etc. Mi enfoque es crear y desarrollar tiendas online funcionales y personalizadas para satisfacer las necesidades específicas de tu negocio.'
    document.querySelector('.projects-section h3').innerText = 'PROYECTOS'
    document.querySelector('.projects-section p').innerText = 'Y MAS...'
    document.querySelector('c-h3').innerText = 'Contactame'
})
document.querySelector('#ingles').addEventListener('click',() => {
    document.querySelectorAll('nav ul a')[0].innerText = 'About me'
    document.querySelectorAll('nav ul a')[1].innerText = 'Projects'
    document.querySelectorAll('nav ul a')[2].innerText = 'Contact'
    document.querySelector('.about-section h3').innerText = 'ABOUT ME'
    document.querySelector('.about-section p').innerText = `Hi! I'm Lautaro Ocampo an experienced front end developer specializing in ecommerce platforms like Shopify, MercadoShops, TiendaNube, etc. My focus is on creating and developing functional and custom online stores to meet your specific business needs.`
    document.querySelector('.projects-section h3').innerText = 'PROJECTS'
    document.querySelector('.projects-section p').innerText = 'AND MORE...'
    document.querySelector('c-h3').innerText = 'Contact Me'
})

let menuButton = document.querySelector('.menu-button')
let menuMobile = document.querySelector('.menu-mobile')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('rotate')
    menuMobile.classList.toggle('translate')
})