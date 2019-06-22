function Mammal(mammalName){
	this.name = mammalName;
	this.offspring = [];
}

Mammal.prototype.sayHello = function(){
	return 'My name is ' + this.name +'!';
}

Mammal.prototype.haveBaby = function(){
	//var child = Object.create(Mammal.prototype);
	var child = new Mammal('Baby ' + this.name); // pass in child.name contents;
	// child.name = 'Baby ' + this.name;
	this.offspring.push(child);
	return child;
}



function Cat(catName, color){
	Mammal.call(this, catName);
	this.color = color;
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function(color){
	var child = new Cat('Baby ' + this.name, color);
	this.offspring.push(child);
	return child;
} // ADD COMMENT TO CODE - EXPLAIN!