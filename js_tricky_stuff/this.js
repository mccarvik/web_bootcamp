// "use strict"

// this is original set by default to the global object
// which in the browser will be window
// console.log(window.this === this);


function badIdea() {
    // since 'badIdea' is not inside a delcared object, this will not be set
    // mistake will be a global variable
    this.mistake = "oops"
}

// can prevent this with "use strict" which will set 'this' to undefined by default


// Since this is inside a defined object (person), this gets set to person
var person = {
    first_name: "me",
    sayHi: function(){
        return "Hi" + this.first_name;
    },
    determine_context: function(){
        return this === person;
    },
    // functions wont work the same for dog as now 'this' = dog
    dog: {
        sayHello: function(){
            return "Hello " + this.first_name;
        },
        determine_cont: function(){
            return this === person;
        },
        add_numbers: function(a,b,c,d){
            return this.first_name + " just calculated " + (a+b+c+d);
        }
    }
}

// call method will pass in what we want this to equal in the method
console.log(person.dog.sayHello.call(person));

// apply pretty damn similar to call just args are in a list instead of comma separated
console.log(person.dog.add_numbers(1,2,3,4));
console.log(person.dog.add_numbers.call(person,1,2,3,4));
console.log(person.dog.add_numbers.apply(person,[1,2,3,4]));

// Bind you can add the rest of your params later
var calc = person.dog.add_numbers.bind(person,1,2);
console.log(calc(3,4))
