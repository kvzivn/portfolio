const links = document.querySelectorAll('.js-link')

document.addEventListener('DOMContentLoaded', () => document.body.classList.remove('fade'))

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.add('fade');

        setTimeout(() => window.location = e.target.href, 2000)
    })
})
