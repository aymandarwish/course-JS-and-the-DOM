document.body.addEventListener('keydown', function () { // keydown instead keypress for chrome browser
    console.log('Awesome');
    document.querySelector('.hero--homepage').firstElementChild.remove();
});
//
//
document.addEventListener('click', function () {
    const MyHeading = document.querySelector('h1');
    MyHeading.style.fontSize = '5em';
});
//
//
function bgColor() {
    const myForm = document.querySelector('p');
    myForm.style.backgroundColor = 'blue';
    console.log('Blue Background');
}

area.addEventListener('click', bgColor);
// area.removeEventListener('click', bgColor); // Both (Add Remove Event Listener) Not working together !!!!!!

document.addEventListener('click', function () {
    console.log('The document was clicked');
});


// document.body.addEventListener('click', function () {
//     console.log('The document body was clicked');
// });

// document.addEventListener('click', function (event) {
//     console.log('event');
// });


// const links = document.querySelectorAll('a');
// const thirdLink = links[30];

// thirdLink.addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log("Look, ma! We didn't navigate to a new page!");
// });


// const myCustomDiv = document.createElement('div');

// function respondToTheClick(evt) {
//     console.log('A paragraph was clicked: ' + evt.target.textContent);
// }

// for (let i = 1; i <= 20; i++) {
//     const newElement = document.createElement('p');
//     newElement.textContent = 'This is paragraph number ' + i;

//     myCustomDiv.appendChild(newElement);
// }

// document.body.appendChild(myCustomDiv);

// myCustomDiv.addEventListener('click', respondToTheClick);



// document.querySelector('#content').addEventListener('click', function (evt) {
//     // if (evt.target.nodeName === 'SPAN') { // ← verifies target is desired element
//     //     console.log('A span was clicked with text ' + evt.target.textContent);
//     // }

//     // Or

//     if (evt.target.nodeName.toLowerCase() === 'span') {
//         console.log('A span was clicked with text ' + evt.target.textContent);
//     }
// });

// const startingTime = performance.now();
// for (let i = 1; i <= 100; i++) {
//     for (let j = 1; j <= 100; j++) {
//         console.log('i and j are ', i, j);
//     }
// }
// const endingTime = performance.now();
// console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');