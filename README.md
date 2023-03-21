# JS-CounterApp

This is a basic JavaScript counter that allows users to increment and decrement a value by clicking buttons.

## Demo

![Demo 1](/assets/1.png "First State")

![Demo 2](/assets/2.png "Second State")

![Demo 3](/assets/3.png "Third State")

### Step 1 - HTML

This is a basic HTML code for a counter. Here's a brief explanation of the code:


- `<div class="counter"> ... </div>`: This is a div element with a class name of "counter", which contains the counter.

- `<div class="count">0</div>`: This is a div element with a class name of "count", which displays the current count.

- `<div class="buttons"> ... </div>`: This is a div element with a class name of "buttons", which contains the buttons for incrementing, decrementing, and resetting the count. It has three buttons that are used to interact with the counter.
>
> `<button class="btn decrease">Decrement</button>`
>
> `<button class="btn reset">Reset</button>`
>
> `<button class="btn increase">Increment</button>`
>

- These buttons will increment, decrement or reset the counter.


### Step 2 - CSS

The CSS code adds styles to the HTML elements of a basic counter. The styles define the background colors, font sizes, button styles, and layout of the counter. The counter is centered on the page and has a circular shape with a shadow effect. The colors of the buttons change depending on their function (increment, decrement, or reset). Overall, the styles create a simple and visually appealing user interface for the counter.

Play around with it the way you want !!!

### Step 3 - JS

The JavaScript file adds functionality to the HTML elements of a basic counter. Here's a brief explanation of the code:

>
>`const count = document.querySelector('.count'); `
>
>`const decrease = document.querySelector('.decrease');`
>
>`const reset = document.querySelector('.reset');`
>
>`const increase = document.querySelector('.increase');`
>

These select the HTML elements with class names of "count", "decrease", "reset", and "increase" and store them in variables using the document.querySelector() method.

>
>`decrease.addEventListener('click', function(){...})`
>
>`increase.addEventListener('click', function(){...})`
>
>`reset.addEventListener('click', function(){...})` 
>

These add event listeners to the decrease, increase, and reset buttons, respectively. When the buttons are clicked, the functions inside the event listeners are executed.

`function changeColor(){...}`  
This function changes the color of the count element based on its value. If the count is greater than zero, the color is set to green. If the count is less than zero, the color is set to red. If the count is zero, the color is set to white.

