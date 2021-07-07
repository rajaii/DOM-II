


let entireSelector = document.querySelector('.blocks');
entireSelector.style.display = 'flex';

let redBoxSelector = document.querySelector('.block--red');
redBoxSelector.addEventListener('click', (e) => {
    e.target.style.order = '-1';
})
redBoxSelector.addEventListener('mousedown', (e) => {
    TweenMax.to(e.target, 5, {marginLeft: 1200});  
})


let blueBoxSelector = document.querySelector('.block--blue');
blueBoxSelector.addEventListener('click', (e) => {
    e.target.style.order = '-1';
})
blueBoxSelector.addEventListener('mousedown', (e) => {
    TweenMax.to(e.target, 5, {marginLeft: 2000});  
})


let greenBoxSelector = document.querySelector('.block--green');
greenBoxSelector.addEventListener('click', (e) => {
    e.target.style.order = '-1';
})
greenBoxSelector.addEventListener('mousedown', (e) => {
    TweenMax.to(e.target, 5, {marginLeft: 2000});  
})
let pinkBoxSelector = document.querySelector('.block--pink');
pinkBoxSelector.addEventListener('click', (e) => {
    e.target.style.order = '-1';
})
pinkBoxSelector.addEventListener('mousedown', (e) => {
    TweenMax.to(e.target, 5, {marginLeft: 2000});  
})
let grayBoxSelector = document.querySelector('.block--gray');
grayBoxSelector.addEventListener('click', (e) => {
    e.target.style.order = '-1';
})
greyBoxSelector.addEventListener('mousedown', (e) => {
    TweenMax.to(e.target, 5, {marginLeft: 2000});  
})




