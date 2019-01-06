(function () {
    if (document.body.classList.contains('has-animations')) {

        const sr = window.sr = ScrollReveal()

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


