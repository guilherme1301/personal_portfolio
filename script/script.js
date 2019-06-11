const projects = [
    {
        title: 'Jogo da Forca',
        description: 'Jogo intenso! Necessita de extrema atenção e sabedoria. Boa sorte!',
        link: 'https://github.com/guilherme1301/jogo-da-forca',
        tags: ['jogos']
    },
    {
        title: 'Validador de CPF',
        description: 'Essa aplicação faz a verificação de CPFs. Com ela você pode descobrir se o CPF inserido é valido ou não.',
        link: 'https://github.com/guilherme1301/cpf_validator',
        tags: ['ferramentas', 'pesquisa']
    },
    {
        title: 'Ultimo projeto',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        link: 'https://github.com/guilherme1301/cpf_validator',
        tags:['pesquisa']
    },
    {
        title: 'Jogo da Forca',
        description: 'Jogo intenso! Necessita de extrema atenção e sabedoria. Boa sorte!',
        link: 'https://github.com/guilherme1301/jogo-da-forca',
        tags: ['jogos']
    },
    {
        title: 'Validador de CPF',
        description: 'Essa aplicação faz a verificação de CPFs. Com ela você pode descobrir se o CPF inserido é valido ou não.',
        link: 'https://github.com/guilherme1301/cpf_validator',
        tags: ['ferramentas', 'pesquisa']   
    },
    {
        title: 'Ultimo projeto',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        link: 'https://github.com/guilherme1301/cpf_validator',
        tags:['pesquisa']
    },
    {
        title: 'Jogo da Forca',
        description: 'Jogo intenso! Necessita de extrema atenção e sabedoria. Boa sorte!',
        link: 'https://github.com/guilherme1301/jogo-da-forca',
        tags: ['jogos']
    },
    {
        title: 'Validador de CPF',
        description: 'Essa aplicação faz a verificação de CPFs. Com ela você pode descobrir se o CPF inserido é valido ou não.',
        link: 'https://github.com/guilherme1301/cpf_validator',
        tags: ['ferramentas', 'pesquisa']
    },
    {
        title: 'Ultimo projeto',
        description: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        link: 'https://github.com/guilherme1301/cpf_validator',
        tags:['pesquisa']
    },

]

function canvasDots() {
    const canvas = document.querySelector('canvas'),
          ctx = canvas.getContext('2d'),
          colorDot = '#cecece',
          color = '#cecece'
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.display = 'block'
    ctx.fillStyle = colorDot
    ctx.lineWidth = .1
    ctx.strokeStyle = color;

    var mousePosition = {
        x: 30 * canvas.width / 100,
        y: 30 * canvas.height / 100
    }

    let dots = {
        nb: 200,
        distance: 80,
        d_radius: 50,
        array: []
    }

    function Dot() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height

        this.vx = -.8 + Math.random()
        this.vy = -.8 + Math.random()

        this.radius = 3 * Math.random()

    }

    Dot.prototype = {
        create: function() {
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.radius, 0 , Math.PI * 2, false)
            ctx.fill()
        },

        animate: function() {
            for(i = 0; i < dots.nb; i++){
                
                let dot = dots.array[i]

                if(dot.y < 0 || dot.y > canvas.height){
                    dot.vx = dot.vx
                    dot.vy = - dot.vy
                }
                else if(dot.x < 0 || dot.x > canvas.width){
                    dot.vx = - dot.vx
                    dot.vy = dot.vy
                }
                dot.x += dot.vx
                dot.y += dot.vy
            }
        },

        line: function() {
            for(i = 0; i < dots.nb; i++){
                for(j = 0; j < dots.nb; j++){
                    i_dot = dots.array[i]
                    j_dot = dots.array[j]

                    if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                        if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                            ctx.beginPath()
                            ctx.moveTo(i_dot.x, i_dot.y)
                            ctx.lineTo(j_dot.x, j_dot.y)
                            ctx.stroke()
                            ctx.closePath()
                        }
                    }
                }
            }
        }
    }

    function createDots(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(i = 0; i < dots.nb; i++){
            dots.array.push(new Dot())
            dot = dots.array[i]

            dot.create();
        }

        dot.line()
        dot.animate()
    }

    window.onmousemove = function(parameter) {
        mousePosition.x = parameter.clientX
        mousePosition.y = parameter.clientY
    }
    mousePosition.x = window.innerWidth / 2
    mousePosition.y = window.innerHeight / 2

    setInterval(createDots, 1000/30)

}


window.onload = function() {
    canvasDots()
    if(document.getElementById('projects_row'))
        loadContent()
    $(".dropdown-trigger").dropdown();

}

function searchFilter(value){
    document.getElementById('filteringBy').style.display = "none"

    var found = false;
    for (let i = 0; i < projects.length; i++) {
        if(projects[i].title.toUpperCase().indexOf(value.toUpperCase()) == -1){
            var div = document.getElementById("project_" + i);
            div.style.display = "none"
        }
        else{
            var div = document.getElementById("project_" + i);
            div.style.display = ""
            found = true
            document.getElementById("no-results-found").style.display = "none"
        }
    }

    //If nothing has been found, show div bellow
    if(!found){
        document.getElementById("no-results-found").style.display = ""
        document.getElementById("no-results-found").innerHTML = "Sem resultados para " + value
    }   
}

function loadContent(){
    

    // <div id="project_1" class="col s12 m4 l4">
    //     <div class="card blue-grey darken-1">
    //         <div class="card-content white-text">
    //             <span class="card-title">Card Title</span>
    //             <p>I am a very simple card. I am good at containing small bits of information.
    //             I am convenient because I require little markup to use effectively.</p>
    //         </div>
    //         <div class="card-action">
    //             <a href="#">This is a link</a>
    //         </div>
    //     </div>
    // </div>

    projects.forEach((element, index) => {
        //<div id="projects_div" class="col s12 m4 l4">
        var projects_div = document.createElement("DIV");
        projects_div.id = "project_" + index;
        projects_div.classList.add("col", "s12", "m6", "l4");

        //<div class="card blue-grey darken-1">
        var card = document.createElement("DIV");
        card.classList.add('card', 'darken-1');
        card.style.background = "#3d3c70";
        projects_div.appendChild(card);

        //<div class="card-content white-text">
        var card_content = document.createElement("DIV")
        card_content.classList.add('card-content', 'white-text')
        card.appendChild(card_content);
        
        //<span class="card-title">Card Title</span>
        var title = document.createElement("SPAN");
        title.classList.add('card-title');
        title.innerHTML = element.title;
        card_content.appendChild(title);

        //<p>I am a very simple card. I am good at containing small bits of information.
        //I am convenient because I require little markup to use effectively.</p>
        var description = document.createElement("P");
        description.innerText = element.description;
        card_content.appendChild(description);

        //<div class="card-action">
        var card_action = document.createElement("DIV");
        card_action.classList.add('card-action');
        card.appendChild(card_action);

        // <a class="waves-effect waves-light btn-small"><i class="material-icons right">cloud</i>button</a>
        var link = document.createElement("A");
        link.classList.add("waves-effect", "waves-light", "btn-small");
        link.innerHTML = "<i class='material-icons right'>link</i>Link";
        link.href = element.link;
        link.target = "_blank"
        card_action.appendChild(link);

        document.getElementById("projects_row").appendChild(projects_div)

        console.log(card);
    });
}

function sortBy(value){
    console.log("sorting by ", value);

    let newNode = document.getElementById("filteringBy");
    newNode.innerHTML = "Filtrando por " + value;
    newNode.style.cssText = "text-align: center; color: #d6d6d6; font-size: 20px; display: block"
    
    var noResultsFound = document.getElementById("no-results-found")

    var found = false;

    for (let i = 0; i < projects.length; i++) {
        var tagFound = false;        
        projects[i].tags.forEach(function(tag){
            if(tag.toUpperCase() == value.toUpperCase()){
                document.getElementById("project_" + i).style.display = ""
                tagFound = true;
                found = true
                noResultsFound.style.display = "none";
            }
        })
        if(!tagFound){
            document.getElementById("project_" + i).style.display = "none";
        }
    
    }

    //If nothing has been found, show div bellow
    if(!found){
        noResultsFound.style.display = ""
        noResultsFound.innerHTML = "Sem resultados para " + value
        console.log(noResultsFound)
    }

}