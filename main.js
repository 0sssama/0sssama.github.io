const whoamiContent = `
    <div class="whoami">
        <div class="title">
            <h1>Hello, this is Oussama.</h1>
        </div>
        <div class="description">
            <p><b>Networking & Telecommunications</b> student @<b>EST Fes</b>, freelancer, <b>fullstack</b> web developer with <b>+4 years</b> of experience, design & electronics enthusiast. Always curious to learn more about this field.</p>
        </div>
        <div class="button">
            <p>
                Want us to work together?
            </p>
            <button class="ol-button__regular" onClick="changeContent('contact')">
                Contact me
            </button>
        </div>
    </div>
    `
const contactContent = `
    <div class="contact">
        <div class="title">
            <h1>Contact me</h1>
        </div>
        <div class="contact-details">
            <div class="sm email">
                <ion-icon name="mail"></ion-icon>
                <p>
                    <a href="mailto:labrahmioussama@gmail.com">
                        LabrahmiOussama@gmail.com
                    </a>
                </p>
            </div>
            <div class="sm phone">
                <ion-icon name="call"></ion-icon>
                <p>
                    +212 (0) 6 91 04 14 74
                </p>
            </div>
            <div class="sm linkedin">
                <ion-icon name="logo-linkedin"></ion-icon>
                <p>
                    <a href="https://www.linkedin.com/in/oussama-labrahmi-0929821ab/">
                        Oussama Labrahmi
                    </a>
                </p>
            </div>
            <div class="sm github">
                <ion-icon name="logo-github"></ion-icon>
                <p>
                    <a href="https://www.github.com/0sssama">
                        0sssama
                    </a>
                </p>
            </div>
            <div class="sm twitter">
                <ion-icon name="logo-twitter"></ion-icon>
                <p>
                    <a href="https://www.twitter.com/0samaTweets">
                        @0samaTweets
                    </a>
                </p>
            </div>
            <div class="sm instagram">
                <ion-icon name="logo-instagram"></ion-icon>
                <p>
                    <a href="https://www.instagram.com/osm_labrahmi">
                        @osm_labrahmi
                    </a>
                </p>
            </div>
            <div class="sm facebook">
                <ion-icon name="logo-facebook"></ion-icon>
                <p>
                    <a href="https://www.facebook.com/oussama.labrahmi/">
                        Oussama Labrahmi
                    </a>
                </p>
            </div>
        </div>
    </div>
    `

window.onload = () => {
    changeContent('whoami')
}
const changeContent = (to) => {
    if (to === 'whoami') {
        $('.content').fadeOut()
        setTimeout(()=>{
            $('.content').html(whoamiContent)
        }, 400)
        $('.content').fadeIn()
    } else if (to === 'contact') {
        $('.content').fadeOut()
        setTimeout(()=>{
            $('.content').html(contactContent)
        }, 400)
        $('.content').fadeIn()
    }
}