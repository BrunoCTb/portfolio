const pj1Content = {
    'title': 'Arena virtual', 
    'eachTechs': ['Java', 'Spring Projects', 'HTML', 'CSS', 'Js', 'MySQL', 'Flyway'], 
    'pjImageUrls': ['images/not-found.png'], 
    'pjDescription': 'Uma Plataforma de gerenciamento de campeonatos, sendo uma RestApi desenvolvida em Java com Spring para criação, organização e gerenciamento de campeonatos. Permite aos usuários criar competições personalizadas, gerenciar times e jogadores e facilitar torneios.', 
    'pjGithubUrl': 'https://github.com/BrunoCTb/Arena-virtual'
}

const pj2Content = {
    'title': 'Pets', 
    'eachTechs': ['Java', 'Spring Projects', 'Thymeleaf', 'HTML', 'CSS', 'Js', 'Jquery', 'MySQL'], 
    'pjImageUrls': ['images/not-found.png'], 
    'pjDescription': 'E-commerce de produtos relacionados a pets', 
    'pjGithubUrl': 'https://github.com/BrunoCTb/pets/'
}

const pj3Content = {
    'title': 'Safe Text', 
    'eachTechs': ['Java', 'SQlite3'], 
    'pjImageUrls': ['images/not-found.png'], 
    'pjDescription': 'Armazenar informações de forma mais segura', 
    'pjGithubUrl': 'https://github.com/BrunoCTb/safe-text'
}

const projectsList = [pj1Content, pj2Content, pj3Content]

function openCard(projectTitle) {
    card = document.getElementsByClassName("project-card")[0]
    card.style.display = "block";

    main = document.getElementsByTagName("main")[0]
    main.className = "overlay";
    footer = document.getElementsByTagName("footer")[0]
    footer.className = "overlay";

    body = document.getElementsByTagName("body")[0]
    body.style.overflowY = "hidden";

    let project = getProject(projectTitle);
    let html = editPjContent(project)
    
    card.innerHTML += html;

    
}

function closeCard() {
    card = document.getElementsByClassName("project-card")[0]
    card.style.display = "none";

    main = document.getElementsByTagName("main")[0]
    main.className = "";
    footer = document.getElementsByTagName("footer")[0]
    footer.className = "";

    body = document.getElementsByTagName("body")[0]
    body.style.overflowY = "scroll";

    card.innerHTML = "";
}

function getProject(projectTitle) {
    for (i of projectsList) {
        if(i.title.toLowerCase().trim() == projectTitle.toLowerCase().trim()) {
            return i;
        }
    }

    return;
}

function editPjContent(data) {
    // adicionar cada tech da lista do js como se fosse um html
    loopPjTechs = ''
    for (tech of data.eachTechs) {
        loopPjTechs += `<span>${tech}</span>`
    }
        
    // fazer o mesmo que acima, porem para a lista de url das imagens
    loopPjImageUrl = ''
    for (img of data.pjImageUrls) {
        loopPjImageUrl += `<img src="${img}" alt="imagem">`
    }
    
    return `<div class="close-card" onclick="closeCard()">
                <span>x</span>
            </div>
            <div class="project-card-title">
                <h2>${data.title}</h2>
            </div>
            <div class="project-card-techs">
                ${loopPjTechs}
            </div>
            <div class="project-card-images">
                <span id="previous-image"><</span>
                <div class="project-card-carousel">
                    ${loopPjImageUrl}
                </div>
                <span id="previous-image">></span>
            </div>
            <div class="description">
                
                <p>${data.pjDescription}</p>
            </div>
            <div class="btn-actions">
                <a href="${data.pjGithubUrl}"><img src="images/social/github.png" alt="github">Código</a>
                <button onclick="closeCard()">Fechar</button>
            </div>`
}
