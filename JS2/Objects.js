var user = {
    name:'Sunny',
    age : 20,
    place :'DMM',
    office : 'TechM',
};

//For retrieveing details of user individually
//console.log('User name is' ,user.name);
console.log('User age is' ,user.age);
console.log('User Office is' ,user.office);

//to deelete any property from User
delete user.place;
console.log('After deleting  the list is', user);

//to retrieve the entire data
console.log('Values are', user);

//for adding data into list
user.DOB = 18/04/1998;
user.Destination = 'Good Job';
document.write('After adding the data is' ,user);