//on key down event
var elekeydown = document.getElementById("one");
elekeydown.onKeydown = function () {
    console.log('triggered');
}

//writing events by using the addEventListener
const elekeyup = document.getElementById('two');
const bind = document.createElement('p');
elekeyup.addEventListener('keyup', function (){
    bind.textContent = elekeyup.value;

    //use value when takung input from the user
    console.log(elekeyup.value);
    console.log("key up event");

    //to print the values in browser as well
    document.body.appendChild(bind);
})


//binding the data
let ele = document.createElement('h2');
const third = document.getElementById('twoway'); //input text field
third.addEventListener('keyup', function (){
    ele.textContent = third.value;
    document.body.appendChild(ele);
})