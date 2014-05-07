// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}

/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

   - Can be created using var object = {};

2. Give adam a name property with the value "Adam".

  - Use dot notation to add the value "Adam" to the name property. 
  - object.property = value

3. Add a spouse property to terah and assign it the value of adam.

  - Use dot notation to add the object adam to the spouse property of the object terah.
  - object.property = other object

4. Change the value of the terah weight property to 125.

  -Use dot notation to change the value of the weight property to 125.
  - object.property = new value

5. Remove the eyeColor property from terah.

  - Delete the property from the object.
  - delete object.property

6. Add a spouse property to adam and assign it the value of terah.

  - Similar to step 3. object.property = other object

7. Add a children property to terah and and use object literal notation to assign
   this variable the value of a JavaScript Object object with no properties

  - Use both dot notation and literal notation to complete.
  - object.property = {}; (a new empty object within the parent object)

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

  - Use dot notation to build.
  - parentObject.parentProperty.newChildPropery = {newSubChildProperty: value};

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

  - Similar to step 8.
  - parentObject.parentProperty.newChildPropery = {newSubChildProperty: value};

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

  - Similar to step 8.
  - parentObject.parentProperty.newChildPropery = {newSubChildProperty: value};

11. Add a children property to adam and assign it the value of terah children.

  - Use dot notation to complete.
  - object.property = object.proper


*/

// __________________________________________
// Write your code below.

var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
terah.children = {};
terah.children.carson = {name: "Carson"};
terah.children.carter = {name: "Carter"};
terah.children.colton = {name: "Colton"};
adam.children = terah.children;

// __________________________________________
// Reflection: Use the reflection guidelines

// Having completed the previous challenge successfully with peers made this challenge make much more sense. 
// In other words, being familiar with the tools made it easier to work with them.  

// The only concept I'm having to work through is that of pseudocode. To me, reading the outline provided
// already was the pseudocode. I tried to make it more meaningful by breaking down the concepts into
// keywords for each step. I'm not sure however if that would be considered good pseudocode.

// I feel confident in the challenges Learning Objectives overall. I again enjoyed this challenge with it's 
// riddle nature. It made the process of overcoming each error more meaningful and had me putting more thought 
// into the code process. I didn't find any aspect of this challenge tedious or to overwhelming to overcome.

// // __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)