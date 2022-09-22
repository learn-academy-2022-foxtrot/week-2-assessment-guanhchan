# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: I know that these are the variables that gets passes into a function. Normally when I think of parameter is when the function is looking for certain variable for the function to fully work properly. An argument is the variable that you are using to test the functions/ methods. 

Researched answer: A parameter is when a function has a variable that is a placeholder that is defined inside of the parentheses of the function expression. An arguement is the content that is passed into the function and validates where all the parameters exist in the function.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The .map() method is a higher order function that is used when dealing with arrays, the main predefined parameters are element/value, key, and array. If you use the .map() method you at least need to let do something with each item(element/value) in the array.

Researched answer: Takes up to three arguements, value, index, array. Of the three only the value is required for the .map() method to work
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
Calls a defined callback function on each element of an array, and returns an array that contains the results.

.map(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any)

3. What is the difference between map and filter?

Your answer: Map will iterate through an array and return a new array of the same length and .filer() will iterate throuh an array and return a new array with a diffent length possibly. Map will prefom an action to every item in the array and filter will pick from the array that meets the conditions and create a new array.

Researched answer: Both will iterates through an array, map will prefrom an action to each item in the array and return the same length as the original. Filter will only add the item that satisfys the conditions before adding the item to the new array, the filter method needs to do an evaluation that returns a boolean value of true or false || truthy or falsy.

4. What is iteration?

Your answer:When I think of iteration, Im thinking about the process of going through each item in a list/array. In coding we iterate through arrays to access the values inside the array so that we can do something with said item. You can use many different kinds of functions or methods to iterate through an array. for loops, for each method, .map(), and .filter() are just some examples.

Researched answer: The process of performing a set of actions a number of times until the condition is met. In all programming iteration is imporant for preforming giving task, solving complex problems and used to show solutions. If not careful, you can write a program will infinitely loop and will not stop until you force quit, becuase the conditions have not been met. After a while the computer will start heating up depending on the code that was written.

5. What is the difference between a class and an object?

Your answer: A class is an object that has predermined keys/values, normally a class will look for some parameter to be pass through. A class can also have methods  and have access to the values within the class, you can access them by calling "this". An object is a collection of javascrpit data types that are seperated by commas. An object can be changed and modifide if you know how to access the right path. Most JSON is structured using objects.{}


Researched answer: Objects are JS datatypes that has key:value pairs, can contain static info and also can have methods that perfrom actions(like a function). Classes are blue prints of objects, and have certain rule that needs to be followed.

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting is taking a variable that lives in side a method or function and taking it outside of the function and allowing to be a gloablly accessable variable.

Researched answer: lol, I was a little off on my answer... Hoisting is use a variable  before it is declared, when using var you can hoist variable globally. If you use let / const , you can not hoist those variables. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: Discribes a type of user that goes through a full user experience.

2. Spread operator: (...arrVal) used to expand iterable or an array 

3. React: a JS library for creating user interface, everything is a componet and are independent and reusable.

4. React props: Special React object passing info from one component to another, creates a unidirectional flow of data.

5. DOM events: (Document Object Model) events signals something occured and can be triggered users or by browser.
