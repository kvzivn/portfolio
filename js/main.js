(function () {
    const workLink = document.querySelector('.js-workLink')
    const aboutLink = document.querySelector('.js-aboutLink')
    const mainContent = document.querySelector('.js-content')
    const nav = document.querySelector('.js-nav')

    let workPage = `
        <p class="bio-text js-bio">
                I’m a UX designer that loves to code.<br>Currently based in Toronto, CA.
        </p>

        <section class="project project--spinnup js-projectFirst">
            <a class="project-link" href="/spinnup.html">
                <img class="project-logo" src="/img/spinnup/spinnup_logo.png" alt="spinnup">
            </a>
        </section>

        <section class="project project--polar js-projectSecond">
            <a class="project-link" href="/polar.html">
                <img class="project-logo project-logo--polar" src="/img/polar/polar_logo.png" alt="polar">
            </a>
        </section>

        <section class="project project--gg js-projectThird">
            <a class="project-link" href="/gg">
                <img class="project-logo project-logo--gg" src="/img/gg/gg_logo.png" alt="grocery gateway">
            </a>
        </section>
    `

    let aboutPage = `
        <section class="about about-text">
            <img class="about-img" src="/img/kevin.jpg" alt="Kevin Ivan">
            <div class="column">
                <p class="about-paragraph first">
                    I love to get inside the mind of people, discover their motivations, and use that knowledge to design pleasant and accessible
                    experiences.
                </p>
                <p class="about-paragraph first">
                        I'm also into really cool stuff like biohacking and yoga.
                </p>
                <p class="about-paragraph third">
                    I can confidently lead ideation sessions, conduct user research, and develop everything from
                    low-fidelity prototypes to production quality code.
                </p>
            </div>
        </section>
    `

    let routes = {
        '/index.html': workPage,
        '/about.html': aboutPage
    }

    if (window.location.pathname === '/about.html') {
        nav.classList.add('about-page')
    }

    if (workLink) {
        workLink.addEventListener('click', (e) => {
            e.preventDefault()
            onNavItemClick('/index.html')

            if (nav.classList.contains('about-page')) {
                nav.classList.remove('about-page')
            }
        })
    }

    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => {
            e.preventDefault()
            onNavItemClick('/about.html')
            nav.classList.add('about-page')
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

        // sr.reveal('.js-heading', {
        //     delay: 800,
        //     duration: 1000,
        //     distance: '40px',
        //     easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        //     origin: 'bottom',
        //     interval: 150
        // })

        // sr.reveal('.js-subtitle', {
        //     delay: 1000,
        //     duration: 1000,
        //     distance: '40px',
        //     easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        //     origin: 'bottom',
        //     interval: 150
        // })

        // sr.reveal('.color', {
        //     delay: 1400,
        //     duration: 600,
        //     distance: '20px',
        //     easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        //     interval: 100,
        //     origin: 'bottom',
        //     viewFactor: 0.2
        // })

        // sr.reveal('.intro-infoItem', {
        //     delay: 2000,
        //     duration: 1400,
        //     distance: '100px',
        //     easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        //     interval: 150,
        //     origin: 'left'
        // })

        // sr.reveal('.js-textHeading', {
        //     delay: 600,
        //     duration: 800,
        //     distance: '60px',
        //     easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        //     origin: 'bottom',
        //     interval: 150
        // })

        // sr.reveal('.js-paragraph', {
        //     delay: 800,
        //     duration: 800,
        //     distance: '60px',
        //     easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        //     interval: 400,
        //     origin: 'bottom',
        //     interval: 150
        // })

        // sr.reveal('.js-img', {
        //     delay: 1200,
        //     duration: 1400,
        //     distance: '60px',
        //     easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        //     origin: 'bottom',
        //     interval: 150
        // })



        // sr.reveal('.js-nav', {
        //     delay: 600,
        //     duration: 1000,
        //     distance: '40px',
        //     easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        //     origin: 'top'
        // })

        // sr.reveal('.js-bio', {
        //     delay: 1000,
        //     duration: 1000,
        //     distance: '60px',
        //     easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        //     origin: 'bottom',
        //     interval: 150
        // })

        // sr.reveal('.js-projectFirst', {
        //     delay: 1200,
        //     duration: 1000,
        //     distance: '60px',
        //     easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        //     origin: 'bottom',
        //     interval: 150
        // })

        // sr.reveal('.js-projectSecond', {
        //     delay: 200,
        //     duration: 1200,
        //     distance: '100px',
        //     origin: 'bottom'
        // })

        // sr.reveal('.js-projectThird', {
        //     delay: 200,
        //     duration: 1200,
        //     distance: '100px',
        //     origin: 'bottom'
        // })
    }

}())