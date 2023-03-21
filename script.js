// Adding js to the counter

// Selecting the elements

const count = document.querySelector('.count');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

// Adding event listeners

decrease.addEventListener('click', function(){
    count.innerHTML--;
    changeColor();
})

increase.addEventListener('click', function(){
    count.innerHTML++;
    changeColor();
})

reset.addEventListener('click', function(){
    count.innerHTML = 0;
    changeColor();
})

// Changing the color of the counter for negative, positive and zero

function changeColor(){
    if(count.innerHTML > 0){
        count.style.color = '#37b24d';
    }
    else if(count.innerHTML < 0){
        count.style.color = '#f03e3e';
    }
    else{
        count.style.color = '#fff';
    }
}
