function Horse(name){
    this.name = name;
    this.stomach = [];
}

Horse.prototype.eat = function(){
    this.stomach.push('tree');
}
module.exports = Horse;