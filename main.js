let currentPage = 'whoami'

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
window.onload = () => {
    let storedLang = getCookie('lang')
    let defaultLang
    if (storedLang) {
        if (!['en', 'fr'].includes(storedLang)) {
            document.cookie = "lang=en"
            defaultLang = 'en'
        } else {
            defaultLang = storedLang
        }
    } else {
        document.cookie = "lang=en"
        defaultLang = 'en'
    }
    switchLanguage(defaultLang)
}
const changeContent = (to, lang) => {
    currentPage = to
    $('.content').fadeOut()
    let contactContent = lang==='en'?contactContentEN:contactContentFR
    let whoamiContent = lang==='en'?whoamiContentEN:whoamiContentFR
    setTimeout(()=>{
        $('.content').html(to==='contact'?contactContent:whoamiContent)
    }, 400)
    $('.content').fadeIn()
}


const switchTheme = () => {
    // Found some issues with this feature,
    // Will be added in feature updates of
    // the website.
    let currentTheme = $('body').hasClass('light')?'light':'dark'
    $('.theme-icon').attr('name', currentTheme==='light'?'sunny':'moon')
    $('body').toggleClass('light')
    $('body').toggleClass('dark')
}


const switchLanguage = (to) => {
    document.cookie = `lang=${to}`
    changeContent(currentPage, to)
    $('.bb-l1').text(to==='fr'?fr.bb_l1:en.bb_l1)
    $('.bb-l2').text(to==='fr'?fr.bb_l2:en.bb_l2)
}