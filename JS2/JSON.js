var user = {
    name : 'sun',
    age : 20,
    place : 'Dmm',
};
console.log("The JSON is", JSON.stringify(user));

//json to object
var myJSON = JSON.stringify(user);
console.log(myJSON);
console.log("The object is",JSON.parse(myJSON));