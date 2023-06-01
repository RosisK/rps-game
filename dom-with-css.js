const totalPrice = document.querySelector('.js-total-price');
const subscribe = document.querySelector('.js-subscribe');

subscribe.onclick = function () {
    if (subscribe.innerText === 'Subscribe') {
        subscribe.innerText = 'Subscribed';
        subscribe.classList.add('is-subscribed');
    } else {
        subscribe.innerText = 'Subscribe';
        subscribe.classList.remove('is-subscribed');
    }
}

function calculate() {
    const userInput = document.querySelector('.js-input');
    const cost = Number(userInput.value);

    if (cost >= 40) {
        totalPrice.innerHTML = `$${cost}`;
    } else {
        totalPrice.innerHTML = `$${cost + 10}`;
    }
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        calculate();
    }
}