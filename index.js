var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var newDog = new Dog('Tom');
var newCat = new Cat();
var newMouse = new Mouse();

newDog.sayHi();
newDog.eat(newCat);
newCat.eat(newMouse);
console.log(newDog);
console.log(newMouse);