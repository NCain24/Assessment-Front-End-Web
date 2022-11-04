const color = document.querySelector('#color')
const place = document.querySelector('#place')
const ritual = document.querySelector('#ritual')
const btns = document.querySelectorAll('button')

for (const btn of btns) {
    btn.classList.add('buttons')
}

const colorChoice = () => {
    alert('My favorite color is Blue!!!')
}

const placeChoice = () => {
    alert('My favorite place is my Home!!!')
}

const ritualChoice = () => {
    alert('My favorite ritual is being with my Wife!!!')
}

color.addEventListener('click', colorChoice)
place.addEventListener('click', placeChoice)
ritual.addEventListener('click', ritualChoice)



