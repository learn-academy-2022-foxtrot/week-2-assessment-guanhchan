// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Foxtrot 2022"
console.log(cohort.split(""))

// a) Your answer: This will Log : [F,o,x,t,r,o,t, ,2,0,2,2]
// b) Verify and explain: My guess was correct, the .split("") will turn a string into an array with each char in its own index.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This will log: "Hello, LEARN Student!"
// b) Verify and explain: The log was undefined, I think becuase there is a missing return statement in the function.

const greeter1 = (name) => {
  return `Hello, ${name}!`
}
console.log(greeter1("LEARN Student"))

// There much better, It feels good to have working code. =)


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: This will log: [8, 10, 12, 14, 16]
// b) Verify and explain: My guess was correct, the .map() method will take in an array and do something to each valeu/element in the array, in this case we are multiplying by 2

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: This will Log: [11,13,15]
// b) Verify and explain: My guess was correct, the .filter() method will check if the value/items meet the critera, In this case we are looking for odd numbers by checking the remainders that are not equal to 0 (value % 2 !== 0 || value % 2 === 1)


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: This will log: JavaScript
// b) Verify and explain: My guess was correct, we are looking through the object variable myCodingSkills, at the key "languages" and the first index [0] of the array

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This will log: {"George", "Foxtrot", 2022}

// Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }

// b) Verify and explain: So my guess was only half right, I knew that the input "George" was going to get updated, I totally forgot that it will return the whole class Object including all keys and values.
// It also returned the name of the class as well.
