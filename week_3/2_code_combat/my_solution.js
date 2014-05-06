// I worked on this challenge by myself.
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// Rescue Mission

// 1. Eliminate one right move to prevent Tharin from going into a dead end.
// 2. Move Tharin up 1x.
// 3. Move Tharin right 2x.
// 4. Move Tharin down 1x.
// 5. Cast attack nearby enemy spell so Tharin can attack.

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// Grab the Mushroom

// 1. Go back in time before Tharin is attacked.
// 2. Move Tharin up 1x.
// 3. Move Tharin right 1x to retrieve mushroom.
// 4. Move Tharin left 1x.
// 5. Move Tharin up 1x.
// 6. Cast attack nearby enemy spell so Tharin can attack.

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
 
// Drink Me

// 1. Move Tharin right 1x.
// 2. Cast attack nearby enemy spell so Tharin can attack.
// 3. Move Tharin right 1x.
// 4. Move Tharin down 1x to retrieve potion.
// 5. Move Tharin up 1x.
// 6. Move Tharin right 1x.
// 7. Cast attack nearby enemy spell so Tharin can attack.

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
 
// Taunt the Guards

// 1. Move Tharin right 1x.
// 2. Have Tharin bust down the door.
// 3. Move Tharin right 1x.
// 4. Have Tharin	say "Hey There!" to get orge attention.
// 5. Move Tharin left 2x.
// 6. Have Tharin say "Attck!" to alert Phoebe to shot.
// 7. Move Tharin right 1x.
// 8. Have Tharin say "Follow me" to have Phoebe follow.
// 9. Move couple right 2x.
// 10. Move couple up 1x.
// 11. Move couple right 1x.
// 12. Have Tharin say "Run for it!" to get the orge attention.
// 13. Move couple down 1x.
// 14. Move couple right 1x.
// 15. Move couple up 1x.
// 16. Move couple right 1x to get away.

this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Run for it!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
 
// It's A Trap

// 1. Move Tharin down 2x.
// 2. Have Tharin say "Hey there!" to get orge's attention.
// 3. Move Tharin up 2x.

this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();

// Break the Prison

// 1. Edit the function called isFriend that takes a name argument.
// 2. If the name of the prisoner is a friend, return true.
// 3. If the name of the prisoner is an enemy, return false. 

if(name === "William")
    return true;
if(name === "Krogg")
    return false;  
if(name === "Lucas")
    return true;
if(name === "Brack")
    return false;
if(name === "Robert")
    return true;
if(name === "MARCUS")
    return false;
return true;
 
// Taunt

// 1. Have Tharin say "Hey" to get orge's attention.
// 2. Have Tharin say something 3 more times to get the orge to come after him.

this.say("Hey!");
this.say("Hey Orge!");
this.say("Over here!");
this.say("Come and get us!");
 
// Cowardly Taunt

// 1. Find a place to lure the orges by moving Tharin behind the arrow outposts.
// 2. Have Tharin announce "I can lure them in here" once he finds a safe spot.
// 2. Move Tharin out into the open so the orges can hear him.
// 3. Have Tharin say "Hey orges, come and get me!" to lure them in.
// 4. Move Tharin back inbetween the arrow outposts to the safe spot.

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.
this.say("I can lure them in here.");
this.moveXY(55,30);
this.say("Hey orges, come and get me!");
this.moveXY(70,10);
 
// Commanding Followers

// 1. Move Tharin toward his fellow troops.
// 2. Have Tharin say "Hail, friends!" to greet them.
// 3. Have Tharin say "Follow me, lets get them!" to prompt the troops to follow.
// 4. Move the army close enought to battle the orges.
// 5. Have Tharin say "Troops attack!" to prompt the troops to fight the orges.

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("Follow me, lets get them!");
this.moveXY(65, 42);
this.say("Troops attack!");
 
// Mobile Artillary 

// 1. Move the cannon into range of first group of orges.
// 2. Fire the cannon 1x toward the first group of orges using their coordinates.
// 3. Move the cannon into range of the second group of orges.
// 3. Fire the cannon 1x toward the second group of orges using their coordinates.
// 4. Fire the cannon again toward the large orge that survived the attack using his coordinates before he reaches you.
// 5. Fire the cannon 1x toward the third group of orges using their coordinates.
// 6. Fire the cannon again toward the large orge that survived the attack using his coordinates before he reaches you.

this.moveXY(30, 26);  
this.moveXY(51, 37);
this.attackXY(68, 53);
this.attackXY(61, 49);
this.attackXY(50, 65);
this.attackXY(49, 53);

// When you are finished with all of the campaigns, answer the following questions. 
// You may want to look at some resources on JavaScript before answering.
//
//   - What is `this` referring to? Think programming-wise rather than in the terms of the game. 

//   	- The soldier Tharin is set to the variable "this". We can then use the variable to call its local 
//		functions which make Tharin move and speak. 

//   - What does the `()` do in JavaScript?

//   	- The parentheses identify a function is being called. In the case of the game, the variable "this" utilized
//		functions such as moveUp() and moveRight() which took no arguments. We later used functions say("string") 
//		which used a string argument and then moveXY(x, y) which used x and y coordinates as arguments.

//   - What is the point of the semicolons?

//   	- Technically they are used to close or seperate statements. While they aren't always needed, it can be make 
//		writing and reading code easier with them in place. 


// Reflection:

// This was a fun challenge despite the buggy nature of the CodeCombat website. It was easy to follow along and play. 
// Writing the pseudocode helped to identify next steps and them put them into action with actual code. The only 
// mission I struggled with was "Break the Prison". I know we needed to build the function isFriend but it wasn't clear
// what was already built into the function and what wasn't. 

// I'm confident in this challenge's Learning Competencies. Having a small amount of JavaScript coming into this helped.
// It made it clearer what was happening as we called functions on the "this" variable.

// I also felt familiar with purpose and usage of semicolons and parentheses in writing JavaScript but it helped to google
// a bit to make sure I had the correct impressions. 