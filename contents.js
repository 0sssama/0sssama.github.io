const inLink = "https://www.linkedin.com/in/olabrahmi"
const twitterLink = "https://twitter.com/0samaTweets"
const githubLink = "https://github.com/0sssama"
const email = "LabrahmiOussama@gmail.com"
const discord = "osm#6969"
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
const whoamiContentEN = `
    <div class="whoami">
        <div class="title">
            <h1>${en.whoami_text1}</h1>
        </div>
        <div class="description">
            <p>${en.whoami_text2}</p>
        </div>
        <div class="button en">
            <p class="en">
                ${en.whoami_text3}
            </p>
            <button class="ol-button__regular" onClick="changeContent('contact', 'en')">
                ${en.contact_text1}
            </button>
        </div>
    </div>
    `
const whoamiContentFR = `
    <div class="whoami">
        <div class="title">
            <h1>${fr.whoami_text1}</h1>
        </div>
        <div class="description">
            <p>${fr.whoami_text2}</p>
        </div>
        <div class="button">
            <p class="fr">
                ${fr.whoami_text3}
            </p>
            <button class="ol-button__regular" onClick="changeContent('contact', 'fr')">
                ${fr.contact_text1}
            </button>
        </div>
    </div>
    `
const projectsContentEN = `
            <div class="projects">
                <div class="project">
                    <div class="project__image">
                        <div class="project__image__link" onClick="window.open('${projects[0].link}')">
                            <ion-icon name="attach"></ion-icon>
                            <p>${en.projects_visit}</p>
                        </div>
                        <div class="loading show"></div>
                        <img onload="hideLoading()" class="project__actual-image" src="${projects[0].image}" alt="${projects[0].link}" />
                    </div>
                    <h1 class="project__title">
                        ${projects[0].title}
                    </h1>
                    <p class="project__description">
                        ${projects[0].description_en}
                    </p>
                    <div class="project__footer">
                        <div class="project__used-langs">
                            <p>${en.projects_used}</p>
                            <div class="project__used-langs__icons">
                                <ion-icon class="html visible" name="logo-html5"></ion-icon>
                                <ion-icon class="sass visible" name="logo-sass"></ion-icon>
                                <ion-icon class="js visible" name="logo-javascript"></ion-icon>
                                <ion-icon class="nodejs" name="logo-nodejs"></ion-icon>
                                <ion-icon class="react" name="logo-react"></ion-icon>
                            </div>
                        </div>
                        <button class="visit-btn ol-button__secondary" onClick="window.open('${projects[0].link}')">
                            <ion-icon name="attach"></ion-icon>
                            ${en.projects_visit}
                        </button>
                    </div>
                </div>
                <div class="project__buttons">
                    <button class="project__buttons__previous ol-button__regular" onClick="showProject(3, 'en')">
                        <ion-icon name="chevron-back"></ion-icon>
                        <p>${en.projects_previous}</p>
                    </button>
                    <button class="project__buttons__next ol-button__regular" onClick="showProject(1, 'en')">
                        <p>${en.projects_next}</p>
                        <ion-icon name="chevron-forward"></ion-icon>
                    </button>
                </div>
            </div>
`
const projectsContentFR = `
            <div class="projects">
                <div class="project">
                    <div class="project__image">
                        <div class="project__image__link" onClick="window.open('${projects[0].link}')">
                            <ion-icon name="attach"></ion-icon>
                            <p>${fr.projects_visit}</p>
                        </div>
                        <div class="loading show"></div>
                        <img onload="hideLoading()" class="project__actual-image" src="${projects[0].image}" alt="${projects[0].link}" />
                    </div>
                    <h1 class="project__title">
                        ${projects[0].title}
                    </h1>
                    <p class="project__description">
                        ${projects[0].description_fr}
                    </p>
                    <div class="project__footer">
                        <div class="project__used-langs">
                            <p>${fr.projects_used}</p>
                            <div class="project__used-langs__icons">
                                <ion-icon class="html visible" name="logo-html5"></ion-icon>
                                <ion-icon class="sass visible" name="logo-sass"></ion-icon>
                                <ion-icon class="js visible" name="logo-javascript"></ion-icon>
                                <ion-icon class="nodejs" name="logo-nodejs"></ion-icon>
                                <ion-icon class="react" name="logo-react"></ion-icon>
                            </div>
                        </div>
                        <button class="visit-btn ol-button__secondary" onClick="window.open('${projects[0].link}')">
                            <ion-icon name="attach"></ion-icon>
                            ${fr.projects_visit}
                        </button>
                    </div>
                </div>
                <div class="project__buttons">
                    <button class="project__buttons__previous ol-button__regular" onClick="showProject(3, 'fr')">
                        <ion-icon name="chevron-back"></ion-icon>
                        <p>${fr.projects_previous}</p>
                    </button>
                    <button class="project__buttons__next ol-button__regular" onClick="showProject(1, 'fr')">
                        <p>${fr.projects_next}</p>
                        <ion-icon name="chevron-forward"></ion-icon>
                    </button>
                </div>
            </div>
`
const hideLoading = () => {
    $('.loading').removeClass('show')
}
const showProject = (id, lang) => {
    $('.project').fadeOut()
    setTimeout(()=>{
        $('.project__title').text(projects[id].title)
        let description = lang==='fr'?projects[id].description_fr:projects[id].description_en
        $('.project__description').text(description)
        $('.loading').addClass('show')
        $('.project__actual-image').attr('src', projects[id].image)
        $('.project__actual-image').attr('alt', projects[id].link)
        $('.project__image__link').attr('onClick', `window.open('${projects[id].link}')`)
        $('.visit-btn').attr('onClick', `window.open('${projects[id].link}')`)
        let availableLangs = ['html', 'js', 'nodejs', 'react', 'sass']
        availableLangs.map(lang => {
            $(`.${lang}`).removeClass('visible')
        })
        projects[id].langs.map(lang => {
            $(`.${lang}`).addClass('visible')
        }) 
        let nextProject, previousProject
        if (id === projects.length - 1) {
            nextProject = 0
        } else {
            nextProject = id+1
        }
        if (id === 0) {
            previousProject = 3
        } else {
            previousProject = id-1
        }
        $('.project__buttons__next').attr('onClick', `showProject(${nextProject}, '${getCookie('lang')}')`)
        $('.project__buttons__previous').attr('onClick', `showProject(${previousProject}, '${getCookie('lang')}')`)
    }, 400)
    $('.project').fadeIn()
}
const skillsContentEN = `skills will be added soon :(`
const skillsContentFR = `comptétences seront ajoutés le plus tôt possible :(`
const contactContentEN = `
    <div class="contact">
        <div class="title">
            <h1>${en.contact_text1}</h1>
        </div>
        <div class="contact-details">
            <div class="sm email">
                <ion-icon name="mail"></ion-icon>
                <p>
                    <a href="mailto:${email}">
                        ${email}
                    </a>
                </p>
            </div>
            <div class="sm linkedin">
                <ion-icon name="logo-linkedin"></ion-icon>
                <p>
                    <a href="${inLink}">
                        Oussama Labrahmi
                    </a>
                </p>
            </div>
            <div class="sm github">
                <ion-icon name="logo-github"></ion-icon>
                <p>
                    <a href="${githubLink}">
                        0sssama
                    </a>
                </p>
            </div>
            <div class="sm twitter">
                <ion-icon name="logo-twitter"></ion-icon>
                <p>
                    <a href="${twitterLink}">
                        @0samaTweets
                    </a>
                </p>
            </div>
            <div class="sm discord">
                <ion-icon name="logo-discord"></ion-icon>
                <p>
                    ${discord}
                </p>
            </div>
        </div>
    </div>
    `
const contactContentFR = `
    <div class="contact">
        <div class="title">
            <h1>${fr.contact_text1}</h1>
        </div>
        <div class="contact-details">
            <div class="sm email">
                <ion-icon name="mail"></ion-icon>
                <p>
                    <a href="mailto:${email}">
                        ${email}
                    </a>
                </p>
            </div>
            <div class="sm linkedin">
                <ion-icon name="logo-linkedin"></ion-icon>
                <p>
                    <a href="${inLink}">
                        Oussama Labrahmi
                    </a>
                </p>
            </div>
            <div class="sm github">
                <ion-icon name="logo-github"></ion-icon>
                <p>
                    <a href="${githubLink}">
                        0sssama
                    </a>
                </p>
            </div>
            <div class="sm twitter">
                <ion-icon name="logo-twitter"></ion-icon>
                <p>
                    <a href="${twitterLink}">
                        @0samaTweets
                    </a>
                </p>
            </div>
            <div class="sm discord">
                <ion-icon name="logo-discord"></ion-icon>
                <p>
                    ${discord}
                </p>
            </div>
        </div>
    </div>
    `