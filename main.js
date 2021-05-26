let currentPage = 'whoami'

window.onload = () => {
    let storedLang = getCookie('lang')
    let storedTheme = getCookie('theme')
    let defaultLang
    if (storedTheme) {
        if (!['light', 'dark'].includes(storedTheme)) {
            document.cookie = 'theme=light'
        } else {
            if (storedTheme === 'dark') {
                switchTheme()
            }
        }
    }
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
const changeContent = (to, lang, projectID) => {
    let currentLang
    if (lang==='crnt') {
        currentLang = getCookie('lang')
    } else {
        currentLang = lang
    }
    currentPage = to
    $('.content').addClass('hidden')
    let whoamiContent = currentLang==='en'?whoamiContentEN:whoamiContentFR
    let projectsContent = currentLang==='en'?projectsContentEN:projectsContentFR
    let skillsContent = currentLang==='en'?skillsContentEN:skillsContentFR
    let contactContent = currentLang==='en'?contactContentEN:contactContentFR
    let content
    switch (to) {
        case 'whoami':
            content = whoamiContent
            break
        case 'projects':
            content = projectsContent
            break
        case 'skills':
            content = skillsContent
            break
        case 'contact':
            content = contactContent
            break
        default:
            content = ` <h1 style="text-align:center">
                            Whoops, something might have gone wrong!
                        </h1>`
    }
    setTimeout(()=>{
        $('.content').html(content)
        if (to === 'skills') {
            changeSkills(currentSkill)
        }
        if (to === 'projects') {
            showProject(projectID?projectID:0, getCookie('lang'))
        }
        $('.content').removeClass('hidden')
    }, 410)
}


const switchTheme = () => {
    let currentTheme = $('body').hasClass('light')?'light':'dark'
    $('.theme-icon').attr('name', currentTheme==='light'?'sunny':'moon')
    $('body').toggleClass('light')
    $('body').toggleClass('dark')
    document.cookie = `theme=${currentTheme==='light'?'dark':'light'}`
}


const switchLanguage = (to) => {
    document.cookie = `lang=${to}`
    if (currentPage === 'projects') {
        let currentProjectID = parseInt($('.project__buttons__next').attr('onClick').substring(12, 13))-1
        if (currentProjectID === -1) {
            currentProjectID = 5
        }
        console.log(currentProjectID)
        changeContent(currentPage, to, currentProjectID)
    } else {
        changeContent(currentPage, to)
    }
    $('.bb-l1').text(to==='fr'?fr.bb_l1:en.bb_l1)
    $('.bb-l2').text(to==='fr'?fr.bb_l2:en.bb_l2)
    $('.bb-l3').text(to==='fr'?fr.bb_l3:en.bb_l3)
    $('.bb-l4').text(to==='fr'?fr.bb_l4:en.bb_l4)
}

const changeSkills = (to) => {
    currentSkill = to
    let newSkills = '<p>Whoops, an error occurred!</p>'
    skillsLol.map(skill => {
        if (skill.name === to) {
            newSkills = skill.content
            $(`li.${skill.name}-link`).addClass('active')
        } else {
            $(`li.${skill.name}-link`).removeClass('active')
        }
    })
    $('.skills__wrapper').addClass('hidden')
    setTimeout(()=>{
        $('.skills__wrapper').html(newSkills)
        $('.skills__wrapper').removeClass('hidden')
    }, 410)
}