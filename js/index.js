// Your code goes here

///////////////////Click and mouseover before it got difficult

let letsGoSelector = document.querySelector('.content-section');
letsGoSelector.addEventListener('mouseover', (e) => {
    e.target.style.cursor = 'pointer';
})
letsGoSelector.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'blue';
    e.target.textContent = 'Dude!  What Are you DOING!!!';
    e.target.style.textAlign = 'center';
})
/////////////////////////////////DBLCLICK
let advSelector = document.getElementsByClassName('inverse-content');

advSelector[0].addEventListener('mouseover', e => e.target.style.cursor = 'grab');
/*advSelector[0].addEventListener('keydown', (e) => {
e.target.textContent = `${e.type} + ${e.keyCode}`
});*/
advSelector[0].addEventListener('dblclick', e => e.target.style.display = 'none')


////////////////////////////Keydowm
let navSelector = document.querySelectorAll('a');

navSelector.forEach(item => {
    item.addEventListener('keydown', (e) => {
        e.target.textContent = `${e.type} : ${e.keyCode}`
        e.target.style.color = '#39FF14';
    })
})
navSelector.forEach(item => {
    item.addEventListener('click', e => e.preventDefault())
});
/*SELECT
let paraGraph = document.createElement('p');
let att = document.createAttribute('id');
att.value = 'log';
paraGraph.setAttributeNode(att);
let introS = document.querySelector('.intro'); 
introS.appendChild(paraGraph);

function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
let introSelector = document.querySelector('.intro p');
introSelector.addEventListener('select', logSelection);
*/

/*SCROLL
let containerSelector = document.querySelector('.container');
containerSelector.addEventListener('scroll', e => e.target.style.backgroundColor = 'blue');
*/

/*RESIZE
window.addEventListener('resize', e => e.target.backgroundColor = 'blue') 
*/
/* FOCUS
let btnSelector = document.querySelector('.btn');
btnSelector.addEventListener('focus', e => e.target.style.backgroundColor = 'black');
*/

/*LOAD
let busPara = document.createElement('p');
let busAtt = document.createAttribute('class');
busAtt.value = 'bus';
busPara.setAttributeNode(busAtt);
let busIntroSelector = document.querySelector('.intro');
busIntroSelector.prepend(busPara);

let busLoadSelector = document.querySelector('.bus');
busLoadSelector.addEventListener('load', (e) => {
     e.target.textContent = 'Bus has loaded!';
})
*/
//////////////////////Drag
let finImgSelector = document.querySelector('.content-destination img');
finImgSelector.addEventListener('drag', e => {
e.target.style.display = 'none';
})


///////////////////Load
window.addEventListener('load', e => console.log('Window loaded'));

/////////////////////////focus
let daForm = document.createElement('form');
let finale = document.querySelector('.content-pick')
finale.appendChild(daForm);
let daInput = document.createElement('input');
let daInputType = document.createAttribute('type');
daInputType.value = 'text';
let daInputPlaceholder = document.createAttribute('placeholder');
daInputPlaceholder.value = 'text input';
daInput.setAttributeNode(daInputType);
daInput.setAttributeNode(daInputPlaceholder);
daForm.appendChild(daInput);

let daFormSelector = document.querySelector('form');
daFormSelector.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'green';
}, true)

//////////////////////////////////resize
function inc() {
    let x = 0;
    return function() {
        x = x + 1;
        return x;
    }
}
const newInc = inc();
window.addEventListener('resize', (e) => {
    if (e) {
        console.log(`You have resized your window ${newInc()} times.`)
    }
})

/////////////////////scroll
window.addEventListener('scroll', e => console.log('You have scrolled'));




let paraGraph = document.createElement('p');
let att = document.createAttribute('id');
att.value = 'log';
paraGraph.setAttributeNode(att);
let introS = document.querySelector('.intro'); 
introS.appendChild(paraGraph);

function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
}

daFormSelector.addEventListener('select', logSelection);













