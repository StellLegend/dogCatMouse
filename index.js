var Dog = require('./Dog');
var Cat = require('./Cat');

var newDog = new Dog('Tom');
var newCat = new Cat();
newDog.sayHi();
newDog.eat(newCat);
console.log(newDog);