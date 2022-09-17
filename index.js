const counterSpan = document.getElementsByTagName('span').item(0);
const decrease = document.getElementById('decrease-button');
const reset = document.getElementById('reset-button');
const increase = document.getElementById('increase-button');

//Add an event listener that will decrease count
decrease.addEventListener('click', () => {
    counterSpan.innerHTML --;
    colourChange();
});

//Add an event listener that will increase count
increase.addEventListener('click', () => {
    counterSpan.innerHTML ++;
    colourChange();
});

//Add an event listener that will reset the count
reset.addEventListener('click', () => {
    counterSpan.innerHTML = 0;
    colourChange();
});

//Function to change colour
const colourChange = () => {
    if (counterSpan.innerHTML < 0) {
        counterSpan.style.color = "red";
    } else if (counterSpan.innerHTML > 0) {
        counterSpan.style.color = "green"; 
    } else {
        counterSpan.style.color = "black";
    }
}
