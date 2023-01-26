const form = document.querySelector('form')
const formInput = document.querySelector('input#searchByID');
	const init = () => {

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        fetch(`http://localhost:5500/movies/${formInput.value}`)
        .then(response => response.json())
        .then((data) => {
            const title = document.querySelector('section#movieDetails h4')
            const sectionSummary = document.querySelector('section#movieDetails p')
            title.innerText = data.title
            sectionSummary.innerText = data.summary
        })
    })
}	


document.addEventListener('DOMContentLoaded', init);	