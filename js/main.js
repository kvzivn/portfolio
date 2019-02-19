(function () {
    const workLink = document.querySelector('.js-workLink')
    const aboutLink = document.querySelector('.js-aboutLink')
    const mainContent = document.querySelector('.js-content')
    const nav = document.querySelector('.js-nav')
    const footer = document.querySelector('.js-footer')

    let workPage = `
        <p class="bio-text js-bio">
                I’m a UX designer that loves to code.<br>Currently based in Toronto.
        </p>

        <section class="project project--spinnup">
            <a class="project-link" href="/spinnup.html">
                <img class="project-logo" src="/img/spinnup/spinnup_logo.png" alt="spinnup">
            </a>
        </section>

        <section class="project project--polar">
            <a class="project-link" href="/polar.html">
                <img class="project-logo project-logo--polar" src="/img/polar/polar_logo.png" alt="polar">
            </a>
        </section>
    `

    let aboutPage = `
        <section class="about about-text js-about">
            <img class="about-img" src="/img/kevin.jpg" alt="Kevin Ivan">
            <div class="column">
                <p class="about-paragraph first">
                    I love to get inside the mind of people, discover their motivations, and use that knowledge to design pleasant and accessible
                    experiences.
                </p>
                <p class="about-paragraph first">
                    I'm also into really cool stuff like biohacking, yoga, and naps.
                </p>
                <p class="about-paragraph third">
                    I can confidently lead ideation sessions, conduct user research, and develop everything from
                    low-fidelity prototypes to production quality code.
                </p>
            </div>
        </section>
    `

    AOS.init()

    if (workLink) {
        workLink.addEventListener('click', (e) => {
            e.preventDefault()
            console.log('workLink')

            mainContent.innerHTML = workPage
            mainContent.classList.toggle('fadeUp')
            footer.classList.toggle('fadeUp')

            if (nav.classList.contains('about-page')) {
                nav.classList.remove('about-page')
            }
        })
    }

    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => {
            e.preventDefault()
            console.log('aboutLink')

            mainContent.innerHTML = aboutPage
            mainContent.classList.toggle('fadeUp')
            footer.classList.toggle('fadeUp')

            nav.classList.add('about-page')
        })
    }
}())