// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Stephen Estrada
//  2. Ernie Salazar


// 1. "YOU SIGNED... WHO?!"
function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
}


var will = new Client("Will Smith", 45, "I like candy");

// 2. "Here they Come!"

var adam = new Client("Adam Sandler", 45, "That's your home! Are you to good for your home?!");
var kristen = new Client("Kristen Bell", 33, "Do you wanna to build snowman?");
var jim = new Client("Jim Carrey", 52, "...so you're telling me there's a chance? YEAH!");

// 3. "TIME IS MONEY!"

// Object constructor utilized from the beginning.
//
// function Client(name, age, quote) {
//   this.name = name;
//   this.age = age;
//   this.quote = quote;
// }

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");

shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

// 4. "SHOW 'EM OFF!"

var clients = [will, adam, kristen, jim, shooterMcGavin];

console.log(clients[1]);

console.log(clients);

// 5. "BUT WAIT, THERE'S MORE!"

will.showQuote = function() {
  console.log(this.quote);
}

will.showQuote();

// ** BONUS **


//  Your Reflection:

// This was an interesting GPS challenge. I think both myself and my partner understood basics of JS and 
// knew where we wanted to go but not always how to get there. I need to work on being a better communicator 
// when trying to explain my thought process. I also need to be more mindful of the roles we have chosen as 
// far as driver and navigator. 

// When I was driving, if I wasn't sure of the navigation being given I tried to speak up and offer another 
// perspective or different solution. I’m not sure if that was successful or if I just became overly 
// controlling and annoying.

// I understood the main concepts and Learning Competencies but struggled in some of the finer points such as 
// when to use the keyword “this” or parenthesis. At the end, we were successful in solving each release’s 
// obstacle but only after a round or two of testing and failing. 

// I enjoyed working with Stephen on this challenge. I also think suggesting solutions that maybe he wasn’t 
// aware of also helped make the solution or concept make more sense for myself. 

