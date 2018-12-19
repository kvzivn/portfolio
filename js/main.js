(function () {
    if (document.body.classList.contains('has-animations')) {

        const sr = window.sr = ScrollReveal()

        sr.reveal('.navigation', {
            delay: 800,
            duration: 1200,
            distance: '40px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'top'
        })

        sr.reveal('.about-text', {
            delay: 1200,
            duration: 1200,
            distance: '60px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'bottom',
            interval: 150
        })

        sr.reveal('.browser', {
            delay: 1600,
            duration: 1600,
            distance: '200px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'bottom',
            interval: 150
        })

        sr.reveal('.hero-left-decoration', {
            duration: 1000,
            distance: '40px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            origin: 'bottom'
        })

        sr.reveal('.clients li', {
            delay: 300,
            duration: 1000,
            rotate: {
                y: 50
            },
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            interval: 150
        })

        sr.reveal('.feature, .tabs-links li, .testimonial, .pricing-table, .pricing-faqs, .cta-inner', {
            duration: 600,
            distance: '40px',
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            interval: 100,
            origin: 'bottom',
            viewFactor: 0.2
        })
    }
}())


