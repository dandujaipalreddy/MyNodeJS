var flight=require('./flight');
flight.setNumber('1');
flight.setOrigin('Hyderabad');
flight.setDestination('Mumbai');
console.log(flight.getInfo());

//Whenever A module is loaded,node.js caches it

var anotherOne=require('./flight');
console.log(anotherOne.getInfo());
