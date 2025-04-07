const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

const colorChange = (e) => {
    console.log(e);
    console.log(e.target); // node list

    if (e.target.id === 'grey') {
        body.style.backgroundColor = 'grey';
    }
    else if (e.target.id === 'white') {
        body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id === 'blue') {
        body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id === 'yellow') {
        body.style.backgroundColor = e.target.id;
    }
}

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', colorChange);
});

let btn = document.querySelector('#btn');
let fpara = document.querySelector('#para');

btn.addEventListener('click', function (e) {
    console.log("listner activated..");
    body.style.backgroundColor = "blue";
});

// testing
// function changeText(event) {
//     console.log(event);
//     fpara.textContent = "Hello! this is function is just for testing";
// }
// fpara.addEventListener('click', changeText);
