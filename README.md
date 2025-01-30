# love-maths
A simple javascript game to help teach mental arithmatic! The player is presented with four options for randomly generated questions; addition, subtraction, multiply and division. They must then try and solve these as fast as possible to get the highest score! 

## Scoring
The game keeps track of how many answers you have got correct, and how many are incorrect. It also keeps a total score that is incremented depending on how quickly you answered the question. 1.5 seconds will get you 1000 points, 3 seconds will get you 100 points, and 7 will net you 10. Anything slower will get a single point. In future updates a high score board will be added, with user scores stored in a browser cookie; this should allow for some competition between classmates!

## QOL Features
A dark mode has been implemented to make the game easier on the eyes, and a difficulty setting has had the framework put in place. Once complete, the user should be able to chose between easy or hard. With each mode having its own scoreboard. 
Easy would lower the max value that the number generator can make, and modes such as division would be simplified to only need a rounded up whole number.
On harder difficulties, the number range will be greater, and the user will need to be more precise with division, rounding to 1-2 decimal places.