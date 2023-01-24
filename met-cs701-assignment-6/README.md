# CS701 Assignment 6

# Part 1

For part 1, I have used AngularJS, to write the filter "tokenize" that can take an optional argument for the delimiter. By default, the filter produces a comma separated string of the individual characters of the given input. If the delimiter is provided, the individual characters in the input string are separated by the specified delimiter. I wrote the filter in an AngulajJS module. I used the filter to develop the Angular application. The controller provides the initial values for the two model properties, the input string and the delimiter string. The code for part 1 can be found in part1.html, angular157.js and part1.js.

# Part 2

For part 2, I have installed Node.js (& npm) and TypeScript. I created an empty project directory assign06 and initialize that project by running command npm -y. In the source director for my project I added a TypeScript script that will declare a variable containing text “Hi There” and printed that text to the console. I then ran tsc “compiler” and transpiled that script into a JavaScript. The code for part 2 can be found in the CS701Part2 folder.

# Part 3

For part 3, I added a TypeScript file containing TypeScript equivalent of the following JavaScript code:

var person = {
  firstName: "John",
  lastName : "Doe",
  fullName : function() {
     return this.firstName + " " + this.lastName;
     console.log( this.firstName + " " + this.lastName);	
  }
};

I place that file in the src directory of your project and transpiled it using tsc compiler. The code for part 3 can be found in src/part3.js and src/part3.ts.

# Part 4

For part 4, I used TypeScript to create a class and an object representing a car. I then let the object have attributes representing make, model and production year. I added a method, that displays concatenated values of vehicle’s model and year. I implemented the object using Prototype pattern. Finally I have transpiled my code into JavaScript. The code for part 4 can be found in src/part4.js and src/part4.ts.

# Part 5

For part 5, I used TypeScript to create an Interface IVehicle which represents vehicles. Provided that interface with 2 attributes: year and make and one method, printYearMake(). I created a class Machine which has properties speed, type and isFloating. I let the class Machine also have a method changeSpeed() which will increment speed by a specified amount . I then created classes Car, Cart and Boat. Each class implements the interface IVehicle and extends class Machine. The method changeSpeed() accepts any speed increment for Car. The method does not allow objects of class Cart to exceed speed of 10 miles per hour. The method changeSpeed() restricts the speed of any Boat to not be more than 30 miles per hour. I used the tsc compiler to traspile interfaces, and classes into JavaScript constructs. The code for part 5 can be found in src/part5.js and src/part5.ts.