# CS701 Assignment 4

# Part 1

For part 1, I have created a drag and drop application for different politicians, which are in the partyList.json file. When the user selects and drags a politician, from the list, the party, which the politician belongs to, becomes highlighted in blue. When the user hovers with the selected politician name over their party, the party becomes highlighted in yellow. The application doesn't allow the user to drop the politician into a party, which they don't belong in. I have also used local storage in my drag and drop application, so when the user closes the site and re-opens it, the politician, which were dropped in the previous session, appear in their parties. The code for part 1 can be found in partywise.html and partywise.js.

# Part 2

For part 2, I build an application that uses web workers. My application starts 5 web workers and sends the messages to them to compute the sum of all the integers from the specified start value to the specified end value. The two values are send as a JSON object having start and end properties. For the values, for the 5 web workers, I chose the following: 1, 1000),(1001, 2000), (2001, 3000), (3001, 4000), and (4001, 5000), The web worker computes the sum of all the integers from the specified start value to the specified end value and sends back the result. The result is sent as a JSON object having start, end, and result properties. The main web application stores all the results it receives in local storage. I used a single key in the local storage and stored the results received into an array.The code for part 2 can be found in part2.html and part2.js.

# Part 3

For part 3, I build a shoppin cart appplication, which allows the user to add fruits and prices to a list. The user can add/remove an item or clear the shopping cart, with the buttons provided. The users entries get stored in session storage, which means that the data will get stored, unless the user quits the page session.The code for part 3 can be found in part3.html and part3.js.

# Part 4

For part 4, I build an application similiar to part 3, however instead of using session storage, I have used the IndexedDB API. The IndexedDB API allows the user to store data inside a user's browser. IndexedDB doesn't work cross-origin, however it stores the user entered information from the previous sessions. The code for part 4 can be found in part4.html and part4.js.

# Part 5

For part 5, I have made a drag and drop application for image files. The application consists of 6 fields, where the user can drop image files and the image files will appear on the website in the box, the user dropped the file into. The code for part 5 can be found in part5.html and part5.js.

