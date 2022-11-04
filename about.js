console.log("hello world");

const img = document.querySelector('img')


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

const compliment = () => {
	alert(`You're so cool!`)
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', compliment)