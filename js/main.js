(function () {
    const workLink = document.querySelector('.js-workLink')
    const aboutLink = document.querySelector('.js-aboutLink')
    const mainContent = document.querySelector('.js-content')

    let workPage = `
        <p class="bio-text js-bio">
            I’m a UX designer that loves to code.<br>Currently based in Toronto, CA.
        </p>

        <section class="project project--gg js-projectFirst">
            <a class="project-link" href="/gg">
                <img class="project-logo" src="/img/gg/gg_logo.png" alt="grocery gateway">
            </a>
        </section>

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
            <section class="about about-text">
                <img class="about-img" src="/img/kevin.jpg" alt="Kevin Ivan">
                <div class="column">
                    <p class="about-paragraph">
                        The reason why I love design, is because right now is an incredible time to be a designer. Many of the products that we use
                        and depend on are products of design.
                    </p>
                    <p class="about-paragraph">
                        Tinder bio. Biohacker. I'm currently in the transition between front-end development and UX design. Not because
                    </p>
                    <p class="about-paragraph">
                        Tell me something about you (your background, your personality, your sense of humor) that I won’t be able to find on Linkedin.
                        Or in another designer.
                    </p>
                    <p class="about-paragraph first">
                        I love to get inside the mind of people, discover their motivations, and use that information to design pleasant and accessible
                        experiences.
                    </p>
                    <p class="about-paragraph third">
                        I can confidently lead ideation sessions, conduct user interviews, identify crucial insights, and develop everything from
                        low-fidelity prototypes to production quality code.
                    </p>
                </div>
            </section>
    `

    let routes = {
        '/': workPage,
        '/about.html': aboutPage
    }

    if (workLink) {
        workLink.addEventListener('click', (e) => {
            e.preventDefault()
            onNavItemClick('/')
        })
    }

    if (aboutLink) {
            aboutLink.addEventListener('click', (e) => {
            e.preventDefault()
            onNavItemClick('/about.html')
        })
    }

    let onNavItemClick = (pathName) => {
        window.history.pushState(
            {},
            pathName,
            window.location.origin + pathName
        )

        mainContent.innerHTML = routes[pathName]
    }

    window.onpopstate = () => {
        mainContent.innerHTML = window.location.pathname
    }

    if (document.body.classList.contains('has-animations')) {

        const sr = window.sr = ScrollReveal()

        sr.reveal('.js-heading', {
            delay: 800,
            duration: 1000,
            distance: '40px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'bottom',
            interval: 150
        })

        sr.reveal('.js-subtitle', {
            delay: 1000,
            duration: 1000,
            distance: '40px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'bottom',
            interval: 150
        })

        sr.reveal('.color', {
            delay: 1400,
            duration: 600,
            distance: '20px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            interval: 100,
            origin: 'bottom',
            viewFactor: 0.2
        })

        sr.reveal('.intro-infoItem', {
            delay: 2000,
            duration: 1400,
            distance: '100px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            interval: 150,
            origin: 'left'
        })

        sr.reveal('.js-textHeading', {
            delay: 600,
            duration: 800,
            distance: '60px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'bottom',
            interval: 150
        })

        sr.reveal('.js-paragraph', {
            delay: 800,
            duration: 800,
            distance: '60px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            interval: 400,
            origin: 'bottom',
            interval: 150
        })

        sr.reveal('.js-img', {
            delay: 1200,
            duration: 1400,
            distance: '60px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'bottom',
            interval: 150
        })



        sr.reveal('.js-nav', {
            delay: 600,
            duration: 1000,
            distance: '40px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'top'
        })

        sr.reveal('.js-bio', {
            delay: 1000,
            duration: 1000,
            distance: '60px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'bottom',
            interval: 150
        })

        sr.reveal('.js-projectFirst', {
            delay: 1200,
            duration: 1000,
            distance: '60px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'bottom',
            interval: 150
        })
    }

}())