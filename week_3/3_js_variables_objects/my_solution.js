// I paired [with: Matthew Darin & Puru Dahal] on this challenge.

// Pseudocode
// 1. Assign a number to the variable secretNumber.
// 2. Assign 7 to the variable secretNumber.
// 3. Assign a string value to a variable password.
// 4. Assign the password with 'just open the door'
// 5. Assign a boolean to variable allowedIn.
// 6. Change the boolean assignment of the variable allowedIn to false.
// 7. Define an empty array called members.
// 8. Add 'John' as the first element of members array.
// 9. Add 3 more elements to the array members, but make sure the 4th one is 'Mary'

// __________________________________________
// Write your code below.

var secretNumber = 10;
var secretNumber = 7;
var password = "P@ssw0rd";
var password = "just open the door";
var allowedIn = 1 < 5;
var allowedIn = false;
var members = [];
var members = ["John"];
var members = ["John", "Sue", "Ellen", "Mary"];

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// While the original code is pretty straight forward it may make more sense to refactor down to four steps.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "Sue", "Ellen", "Mary"];

// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 

// Working with a partner/s really made the process much simpler. Once we all established the expectations, 
// we jumped into solving for each error. The challenge was to remember to not dive right into the code but to 
// think it through and pseudocode first. 

// While none of us were that versed in JavaScript we were able to make it through fairly easily. 
// We then completed the refactoring and reflections on our own. My only remaining question remains around the refactoring. 
// How much is over refactoring? I guess going down to the bare minimum of four steps to pass the test is the goal.

// However, is this over simplifying it after the fact? I’m not sure. Apart from that, I feel confident in the 
// Learning Competencies and the materials covered. I enjoyed the process of overcoming the errors in the driver code. 
// In a sense, it was like working through and solving a riddle. 

// __________________________________________
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
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

