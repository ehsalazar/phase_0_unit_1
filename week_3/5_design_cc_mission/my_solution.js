// I worked by myself on this challenge

// Your mission description:

// The mission is to move our Secret Agent out of harms way. The Agent, OO9, will be able to move up,
// down, right or left. He will also be able to duck below security cameras and if needed, fire his gun.
// He is currently in his room on the 87th floor of the Hotel Tokyo. He will need to make it down the hall
// to the stairs for roof access where his escape helicopter awaits. Hurry though, double agents are staying
// on the same floor monitoring two security cameras and will make an appearance if they suspect 009
// is on the move.  

// Pseudocode

// 1. Move 009 up 1x to exit his hotel room.
// 2. Move 009 right 3x down the hall until he sees the first camera.
// 3. Have 009 duck below the security camera.
// 4. Move 009 up 1x.
// 5. Move 009 right 2x.
// 6. Move 009 down 3x until he sees the second security camera.
// 7. Have 009 duck below the security camera.
// 8. Move 009 right 1x to the door marked "Roof Access".
// 9. Move 009 right 1x to enter the stairs and make his escape.

// Initial Code

var agent009 = {
	position: {x:0, y:0},
	height: 0,
	moveRight: function() {
		this.position.x += 10;
		console.log(agent009.position);
	},
	moveLeft: function() {
		this.position.x -= 10;
		console.log(agent009.position);
	},
	moveUp: function() {
		this.position.y += 10;
		console.log(agent009.position);
	},
	moveDown: function() {
		this.position.y -= 10;
		console.log(agent009.position);
	},
	duck: function() {
		this.height - 10;
		console.log(agent009.height);
	}
};

agent009.moveUp();
agent009.moveRight();
agent009.moveRight();
agent009.moveRight();
agent009.duck();
agent009.moveUp();
agent009.moveRight();
agent009.moveRight();
agent009.moveDown();
agent009.moveDown();
agent009.moveDown();
agent009.duck();
agent009.moveRight();
agent009.moveRight();

// Refactored Code

// I used console.log to test the code to determine if the (x,y) coordinates were moving. 
// The game would not need them.

var agent009 = {
	position: {x:0, y:0},
	height: 0,
	moveRight: function() {
		this.position.x += 10;
	},
	moveLeft: function() {
		this.position.x -= 10;
	},
	moveUp: function() {
		this.position.y += 10;
	},
	moveDown: function() {
		this.position.y -= 10;
	},
	duck: function() {
		this.height - 10;
	}
};

// Reflection

// This was a challenge that I originally was putting off. I didn’t know where to start or if I 
// really understood the JS concepts needed to have it actually function. I looked through a few 
// other cohort solutions for inspiration. I then jumped back into Codecademy’s JS track, 
// specifically about objects. Empowered with those bits of knowledge, I jumped in. 

// I think I actually build code that can be executed. Super exciting! I even built in console.log 
// so I could test to see if my coordinates were moving as my character progressed. While I think I 
// understand the concepts of the JS objects and functions I created, I don’t have a clue how to tie 
// them into HTML and CSS to make it represent what’s in my mind. I want to tie it all together but I’m 
// not there yet…I will be.

// I’m confident in the Learning Competencies and was happy with my results. Despite hesitating to start
// this challenge, I had fun and learned in the process.