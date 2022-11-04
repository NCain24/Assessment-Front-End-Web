const desc = document.getElementById('desc')
const btn = document.querySelector('button')



const randomFood = () => {
    const restaurants = ['Palenque!', 'Mexico Lindo!', 'Fieldhouse!',
'Versalia Pizza!', 'Barlows!', 'Ding How!']
    const picker = restaurants[Math.floor(Math.random() * restaurants.length)]
    btn.innerText = picker, restaurants[randomFood]
}

btn.addEventListener('click', randomFood)