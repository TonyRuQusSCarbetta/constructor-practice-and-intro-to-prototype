//CONSTRUCTOR PRACTICE

// //Basic Version
//
// //array to push to
// var restaurants = [];
//
// //Constructor Function
// function Restaurant(name, seats, cuisine, avgPrice, rating) {
//     this.name = name;
//     this.seats = seats;
//     this.cuisine = cuisine;
//     this.avgPrice = avgPrice;
//     this.rating = rating;
//
//     restaurants.push(this);
// }
//
// //Instead of storing each new restaraunt into a varialbe,
// //we are pushing each new restaraunt into an array.
// new Restaurant('Olive Garden', 50, 'italian', '$20', 4.5);
// new Restaurant('Popeyes Chicken', 37, 'chicken', '$10', 3.9);
// new Restaurant('Panda Express', 12, 'chinese', '$8', 3.2);

//---------------------------------------------------------------

//Complex Version

//array to push to
var restaurants = [];

//Constructor Function
function Restaurant(name, seats, cuisine, avgPrice, rating, array) {
    //keyword this is referring to this new restaraunt we are creating
    this.name = name;
    this.seats = seats;
    this.cuisine = cuisine;
    this.avgPrice = avgPrice;
    this.rating = rating;
    //now we are calling the function we created below, the parameter restaurants is the array & the item parameter is the new Restaurant we are creating
    pushToArray(restaurants, this)
}
//created new function to push to Array (cleaner code)
function pushToArray(array, item) {
  array.push(item);
}

//Instead of storing each new restaraunt into a varialbe,
//we are pushing each new restaraunt into an array.
new Restaurant('Olive Garden', 50, 'italian', '$20', 4.5, restaurants);
new Restaurant('Popeyes Chicken', 37, 'chicken', '$10', 3.9), restaurants;
new Restaurant('Panda Express', 12, 'chinese', '$8', 3.2, restaurants);
new Restaurant ('Pho', 62, 'vietnamese', '$9.25', 2.8);







//-------------------------------------------------------------------
//Example #1 (used for PROTOTYPES section)
//WITH IMMEDIATLEY INVOKED FUNCTION (iife)
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.fullName = (function (x,y) {
    return x + " " + y;})
    (this.firstName, this.lastName)
}

var marilou = new Person('Marilou', 'Carbetta');
var kingston = new Person('Kingston', 'Thouchalanh');
//They don't have to all be stored in varialbes, instead...
//We can make an array of these.
var people = [
  new Person('Zion', 'Dizon'),
  new Person('Dominique', 'Dizon'),
  new Person('Cora', 'Blanco')
]
//-------------------------------------------------------------------
//PROTOTYPES
//like creating an entirely new class of data type in javacscript, we created a person data type which has a unique method called getFullName() which you can execute on ANY Person data type/method imaginable, even though we don't see it if we inspect ...
//PROTOTYPAL INHERITANCE
Person.prototype.getFullName = function () {
                return this.firstName + ' ' + this.lastName;
              };

Person.prototype.getFormalName = function () {
                return `${this.lastName}, ${this.firstName}`;
            };

//-------------------------------------------------------------------
