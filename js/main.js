(function () {
    const body = document.querySelector('body')
    const workLink = document.querySelector('.js-workLink')
    const aboutLink = document.querySelector('.js-aboutLink')
    const mainContent = document.querySelector('.js-content')
    const footer = document.querySelector('.js-footer')

    let workPage = `
        <p class="bio js-bio">
            I’m a UX designer that loves to code.<br>Currently based in Toronto.
        </p>

        <section class="project project--gg">
            <a class="project-link" href="/vui.html">
                <img class="project-logo project-logo--gg" src="/img/gg/gg_logo.png" alt="grocery gateway">
            </a>
        </section>

        <section class="project project--spinnup">
            <a class="project-link" href="/spinnup.html">
                <img class="project-logo" src="/img/spinnup/spinnup_logo.png" alt="spinnup">
            </a>
        </section>

        <section class="project project--polar">
            <a class="project-link" href="/polar.html">
                <img class="project-logo project-logo--polar" src="/img/polar/polar_logo.svg" alt="polar">
            </a>
        </section>
    `

    let aboutPage = `
        <section class="about js-about">
            <img class="about-img" src="/img/kevin.jpg" alt="Kevin Ivan">
            <div class="about-text">
                <p class="about-paragraph">
                    I love to get inside the mind of people, discover their motivations, and use that knowledge to design pleasant and accessible experiences.
                </p>
                <p class="about-paragraph">
                    I'm also into really cool stuff like biohacking, yoga, and naps.
                </p>
                <p class="about-paragraph">
                    I can confidently lead ideation sessions, conduct user research, and develop everything from
                    low-fidelity prototypes to production quality code.
                </p>
                </p>
                <p class="about-paragraph">
                    You can download my resume <a class="link" target="_blank" href="http://kevinivan.com/documents/kevin_ivan_cv.pdf">here.</a>
                </p>
            </div>
        </section>
    `

    AOS.init()

    if (workLink) {
        workLink.addEventListener('click', (e) => {
            e.preventDefault()

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
            }, 350)
        })
    }

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
            }, 350)
        })
    }
}())