const inLink = "https://www.linkedin.com/in/olabrahmi"
const twitterLink = "https://twitter.com/0samaTweets"
const githubLink = "https://github.com/0sssama"
const email = "LabrahmiOussama@gmail.com"
const whoamiContentEN = `
    <div class="whoami">
        <div class="title">
            <h1>${en.text1}</h1>
        </div>
        <div class="description">
            <p>${en.text2}</p>
        </div>
        <div class="button en">
            <p class="en">
                ${en.text3}
            </p>
            <button class="ol-button__regular" onClick="changeContent('contact', 'en')">
                ${en.text4}
            </button>
        </div>
    </div>
    `
const whoamiContentFR = `
    <div class="whoami">
        <div class="title">
            <h1>${fr.text1}</h1>
        </div>
        <div class="description">
            <p>${fr.text2}</p>
        </div>
        <div class="button">
            <p class="fr">
                ${fr.text3}
            </p>
            <button class="ol-button__regular" onClick="changeContent('contact', 'fr')">
                ${fr.text4}
            </button>
        </div>
    </div>
    `
const contactContentEN = `
    <div class="contact">
        <div class="title">
            <h1>${en.text4}</h1>
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
        </div>
    </div>
    `
const contactContentFR = `
    <div class="contact">
        <div class="title">
            <h1>${fr.text4}</h1>
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
        </div>
    </div>
    `