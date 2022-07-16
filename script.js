const testimonies = [
    {
        image: "https://via.placeholder.com/150/92c952",
        author: 'Julian Assange',
        testimony: 'Wow! Great site!',
        occupation: 'Web developer'
    },
    {
        image: 	"https://via.placeholder.com/150/24f355",
        author: 'Charles Babbage',
        testimony: 'Amazing! This really brings out your UI/UX designing skills!',
        occupation: 'Mr. Inventor'
    },
    {
        image: "https://via.placeholder.com/150/d32776",
        author: 'James Windsor',
        testimony: 'What a shite website.',
        occupation: 'Miserable'
    }
]

const progressBar = document.getElementById('progressBar')
const testimonySpan = document.querySelector('.testimony')
const authorH1 = document.querySelector('.name')
const occupationH3 = document.querySelector('.occupation')
const img = document.querySelector('img')


testimonies.forEach((t, index) => {
    setTimeout(() => {   
        const { image, author, testimony, occupation } = t
        testimonySpan.textContent = testimony
    
        authorH1.textContent = author
    
        occupationH3.textContent = occupation
    
        img.src = image

        let i = 1

        const interval = setInterval(() => {
            progressBar.style.width = `${i}%`
            i++
            if (i >= 100) return clearInterval(interval)
        }, 50)
    }, 5000 * index)
})