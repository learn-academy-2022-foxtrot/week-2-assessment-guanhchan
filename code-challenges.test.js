// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Test template

describe('greeter', () => {
    it("return hi, fox", () => {
        expect(greeter()).toEqual('hi, fox!')
    })
})

const greeter = () => {
    return 'hi, fox!'
}
// PASS  ./code-challenges.test.js
// greeter
//   ✓ return hi, fox


// a) Create a test with expect statements for each of the variables provided.

describe('dividerOfThree', () => {
    it("Check if the input is divisible by 3", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"

        expect(dividerOfThree(object1)).toEqual("15 is divisible by three")
        expect(dividerOfThree(object2)).toEqual("0 is divisible by three")
        expect(dividerOfThree(object3)).toEqual("-7 is not divisible by three")
    })
})

// dividerOfThree
// ✕ Check if the input is divisible by 3

// ● dividerOfThree › Check if the input is divisible by 3

// ReferenceError: dividerOf3 is not defined


// b) Create the function that makes the test pass.

// I need to create a function that takes in an input and returns a statement whether if it is divisble by 3

// I will have to use a conditional statement with input % 3 === 0

// There will be two if statements and an else for errors

// If the condition is met it will return the input and the message, if not it will return the other message

const dividerOfThree = (obj) => {
    console.log(obj)
    if (obj.number % 3 === 0) {
        return `${obj.number} is divisible by three`
    } else if (obj % 3 !== 0) {
        return `${obj.number} is not divisible by three`
    } else {
        return "error"
    }
}

//Great after checking some small spelling errors I was able to get it to pass

// dividerOfThree
// ✓ Check if the input is divisible by 3 (11 ms)

// Test Suites: 1 passed, 1 total


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe('stingCap', () => {
    it("Takes in an array of words and returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

        expect(stringCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(stringCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
// stingCap
// ✕ Takes in an array of words and returns an array with all the words capitalized

// ● stingCap › Takes in an array of words and returns an array with all the words capitalized

// ReferenceError: stringCap is not defined

// b) Create the function that makes the test pass.

//So I need to write a function the takes in a array of strings and then capitalize the first letter of each string and then return it back in the same order
// The function name is call stringCap that take in an array of strings
// Im thinking that I will have to loop through the array, maybe I can use the .map method, If not I will use a for loop
// Once I get access to each item(element/value) in the array I will have to get access to the first letter in the string and then use the .toUpperCase() method
// Im thinking that I will have to split the strings and access the frist index [0].toUpperCase()
//Once I find some success with that, then I will return everything back into a nice loking array to match the expect output.
//GL lol seems easy no prob guan

const stringCap = (arr) => {
    //I dont like how I can not see the console.log() here when testing with jest...

    return arr.map((value) => {
        //with a little digging,  I was able to find this built in method .substing()
        //pretty nice and useful
        return value[0].toUpperCase() + value.substring(1)
    })
}

//Great News first test pass and no errors. Great Job Self

// stingCap
// ✓ Takes in an array of words and returns an array with all the words capitalized

// Test Suites: 1 passed, 1 total


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.



describe('firstVowelIndex', () => {
    it("Takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2

        expect(firstVowelIndex(vowelTester1)).toEqual(1)
        expect(firstVowelIndex(vowelTester2)).toEqual(0)
        expect(firstVowelIndex(vowelTester3)).toEqual(2)
    })
})

// firstVowelIndex
// ✕ Takes in a string and logs the index of the first vowel

// ● firstVowelIndex › Takes in a string and logs the index of the first vowel

// ReferenceError: firstVowelIndex is not defined

// b) Create the function that makes the test pass.

// So I think the name of my function firstVowelIndex will give away the functions purpose. 
// The function will take in a arguement/pram(string) and then see if it has any vowels and if so it will return the first instance of the that vowel and return the Index
// I will have to split the string into an array using .split() (EDIT: I keep forgetting to add "" in the .split(''))
// Then use a for loop to iterate through the string array and use a conditional to check for all vowels
// The conditionals will use the && 'AND' and loosely or strictly compare each index for vowels
// Once the first vowel is found, the conditional is happy and will return the index


const firstVowelIndex = (string) => {
    let stringArr = string.split('')
    for(i = 0; i < stringArr.length; i++){
        if(stringArr[i] === "a" || stringArr[i] === "e" || stringArr[i] === "i" || stringArr[i] === "o" || stringArr[i] === "u"){
                    return stringArr.indexOf(stringArr[i])
        }

    }
}

// firstVowelIndex
// ✓ Takes in a string and logs the index of the first vowel

// Test Suites: 1 passed, 1 total

// Yay after a little debuggin I was able to figure out what I need to fix and get everything to pass. Pretty much make sure that the I include "" in the .split method, and use the .indexOf to get the out put of the index of the element/item in the array.

// I had to use try this out in a differnt code file and this it what I came up with. I found out I need to use the method .indexOf() and instead of using && 'AND' I need to use the || 'OR'

// const firstVowelIndex = (string) => {
    
//     let stringArr = string.split('')

//     for(i = 0; i < stringArr.length; i++){
//         console.log(stringArr[i])
//         if(stringArr[i] === "a" || stringArr[i] === "e" || stringArr[i] === "i" || stringArr[i] === "o" || stringArr[i] === "u"){
//             console.log(stringArr[i])
//            return stringArr.indexOf(stringArr[i])
//         }
        
//     }
// }

// console.log(firstVowelIndex('learn'))