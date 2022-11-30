const ballImg = document.querySelector('.ball-img img')
const QInput = document.querySelector('.question-area input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const answers = ['Tak', 'Nie', 'Być może', 'Nie chcesz znać odpowiedzi na to pytanie :)', 'Tomasz Pomponiarz']

const shakeBall = () => {
    ballImg.classList.add('shake-animation')
    setTimeout(checkInput, 1000);

}


const checkInput = () => {
    if(QInput.value !== '' && QInput.value.slice(-1) === '?'){
        const randomElement = answers[Math.floor(Math.random() * answers.length)];
        answer.textContent = randomElement;
        error.textContent = '';
    } else if(QInput.value !== '' && QInput.value.slice(-1) !== '?') {
        error.textContent = 'Pytanie musi być zakończone znakiem zapytania :)';
        answer.textContent = '';
    }
    else {
        error.textContent = 'Wprowadź jakąś treść !';
        answer.textContent = '';
    }
    ballImg.classList.remove('shake-animation');
}



ballImg.addEventListener('click', shakeBall)