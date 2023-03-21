// Adding js to the counter

// Selecting the elements

const count = document.querySelector('.count');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

// Adding event listeners

decrease.addEventListener('click', function(){
    count.innerHTML--;
})

increase.addEventListener('click', function(){
    count.innerHTML++;
})

reset.addEventListener('click', function(){
    count.innerHTML = 0;
})

