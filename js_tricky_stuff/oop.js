function House(bedrooms, bathrooms, sqrft) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.sqrft = sqrft;
}

function dog(name, age) {
    this.name = name;
    this.age = age;
    
    this.bark = function() {
        console.log(this.name + " just barked");
    }
}

var rusty = new dog('Rusty', 3)
rusty.bark()

function Car(make, model, year) {
    this.make = make;
    this.year = year;
    this.model = model;
    this.numwheels = 4;
}

// 'call' / 'apply' resolves the problem of what this is referring to
function Motorcycle(make, model, year) {
    // Car.call(this, make, model, year);
    Car.apply(this, arguments);
    this.numwheel = 2;
}

function person(name) {
    this.name = name;
}

var colt = new person('colt');
console.log(colt.__proto__ === person.prototype);

person.prototype.sayHi = function(){
    return "Hi " + this.name;
}

console.log(colt.sayHi());