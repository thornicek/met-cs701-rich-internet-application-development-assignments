# CS701 Assignment 7

# Part 1

For part 1, I created a simple "Hello World" like node application that will use http server. The application accepts the user's name as one command line argument and prints “Hello Your Name” when invoked in the browser. The code for part 1 can be found in part1.js.

# Part 2

For part 2, I modified the previous application so that it also prints it's process id. This application needs to be ran using node. I then captured the process id and wrote another Node application that will terminate the first application programmatically(stop.js). The code for part 2 can be found in part2/part2.js and part2/stop.js.

# Part 3

For part 3, I wrote an application, a server, similar in spirit to the one in part 1. This time, I let the application, when I invoked it through the browser using a call of the form http://localhost:3000?firstName=John&secondName=Smith, return to the browser a page which shows: Hello John Smith. I then demonstrated that my server will work with names different from John Smith. The code for part 3 can be found in part3.js.

# Part 4

For part 4, I build a server, where two telnet clients could actually exchange messages through that server. The code for part 4 can be found in part4.js and the proof can be found in the file Part4.jpeg.

