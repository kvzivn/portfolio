// import AOS from 'aos'

AOS.init({ disable: 'mobile' })

const body = document.querySelector('body')
const workLink = document.querySelector('.js-workLink')
const aboutLink = document.querySelector('.js-aboutLink')
const mainContent = document.querySelector('.js-content')
const footer = document.querySelector('.js-footer')

const kevin = new Image()
const ggLogo = new Image()

kevin.classList.add('about-img')
kevin.src = "https://kevinivan.com/img/kevin.jpg"
kevin.alt = 'Picture of Kevin Ivan.'

ggLogo.src = "https://kevinivan.com/img/gg_logo.png"
ggLogo.classList.add('project-logo', 'project-logo--gg')
ggLogo.alt = 'grocery gateway logo'

let workPage = `
    <p class="bio js-bio">
        I’m a UX designer that loves to code.<br>Currently based in Toronto.
    </p>

    <section class="project project--gg">
        <a class="project-link js-gg" href="/vui.html"></a>
    </section>

    <section class="project project--spinnup">
        <a class="project-link" href="/spinnup.html">
            <img class="project-logo" src="https://kevinivan.com/img/spinnup_logo.png" alt="spinnup logo.">
        </a>
    </section>

    <section class="project project--polar">
        <a class="project-link" href="/polar.html">
            <img class="project-logo project-logo--polar" src="https://kevinivan.com/img/polar_logo.svg" alt="polar logo.">
        </a>
    </section>
`

let aboutPage = `
    <section class="about js-about">
        <div class="about-text">
            <p class="about-paragraph">
                I love to get inside the mind of people, discover their motivations, and use that knowledge to design pleasant and accessible experiences.
            </p>
            <p class="about-paragraph">
                I'm also into really cool stuff like biohacking, <a class="link link--secret" href="https://www.facebook.com/photo.php?fbid=10216441657533963&set=a.3109421334463&type=3&theater" target="_blank">yoga</a>, and naps.
            </p>
            <p class="about-paragraph">
                I can confidently lead ideation sessions, conduct user research, and develop everything from
                low-fidelity prototypes to production quality code.
            </p>
            </p>
            <p class="about-paragraph">
                You can download my resume <a class="link" target="_blank" href="https://kevinivan.com/documents/kevin_ivan_cv.pdf">here.</a>
            </p>
        </div>
    </section>
`
if (aboutLink) {
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault()

        if (mainContent.classList.contains('slideLeft')) {
            mainContent.classList.remove('slideLeft')
            footer.classList.remove('slideLeft')
        }

        mainContent.classList.add('fadeOut')
        footer.classList.add('fadeOut')

        setTimeout(() => {
            body.classList.add('about-page')
            mainContent.classList.add('slideRight')
            footer.classList.add('slideRight')

            mainContent.innerHTML = aboutPage

            mainContent.classList.remove('fadeOut')
            footer.classList.remove('fadeOut')

            mainContent.querySelector('.js-about').prepend(kevin)
        }, 350)
    })
}

if (workLink) {
    workLink.addEventListener('click', (e) => {
        e.preventDefault()

        if (!body.classList.contains('about-page')) {
            return
        }

        if (mainContent.classList.contains('slideRight')) {
            mainContent.classList.remove('slideRight')
            footer.classList.remove('slideRight')
        }

        mainContent.classList.add('fadeOut')
        footer.classList.add('fadeOut')

        setTimeout(() => {
            if (body.classList.contains('about-page')) {
                body.classList.remove('about-page')
            }

            mainContent.classList.remove('slideRight')
            footer.classList.remove('slideRight')
            mainContent.classList.add('slideLeft')
            footer.classList.add('slideLeft')
            mainContent.innerHTML = workPage
            mainContent.classList.remove('fadeOut')
            footer.classList.remove('fadeOut')

            mainContent.querySelector('.js-gg').appendChild(ggLogo)
        }, 350)
    })
}
