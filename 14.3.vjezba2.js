var  a = 78;
var b = 034;
//delete a,
//delete window.b;
var myObject = {property1:1, property2:2, property1:1};

//2

const users = [
    {name: 'Fabio', surname: 'Biondi'},
    {name: 'Mario', surname: 'Rossi'},
];

const user = {name: 'Lorenzo', surname: 'verdi'};

var noviUseri = [...users, user];
//3

for(let i=0; i<10; i++){
    setTimeout(function() {
        console.log('the number is: ' +i);
    },1000);
}
//console.log(i);