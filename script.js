function showRules(){
    const removeStart = document.querySelector('.start_btn')
    const showRules = document.querySelector('.quiz_rules') 
    showRules.style.display = 'block'
    removeStart.style.display = 'none'
}

function exitQuiz(){
    const quizRules = document.querySelector('.quiz_rules')
    quizRules.style.display = 'none'
}

function Continue(){
    const Questions = document.querySelector('.question_section')
    Questions.style.display = 'block'
}

const questions = [
    {
        question: "What does 'NaN' stand for in JavaScript?",
        answers: ["Not a Number", "Name a Number", "Null and Null", "Not an Object"],
        correct: 0
    },
    {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        answers: ["var x = 5;", "int x = 5;", "variable x = 5;", "let x : 5;"],
        correct: 0
    },
    {
        question: "What will `typeof 'Hello'` return?",
        answers: ["'string'", "'object'", "'number'", "'undefined'"],
        correct: 0
    },
    {
        question: "Which method is used to parse a string into an integer?",
        answers: ["parseInt()", "toInteger()", "parseFloat()", "convertToInt()"],
        correct: 0
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: ["function myFunction() {}", "function:myFunction() {}", "create function myFunction() {}", "function = myFunction() {}"],
        correct: 0
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: ["//", "#", "/*", "--"],
        correct: 0
    },
    {
        question: "What will `console.log(2 + '2')` output?",
        answers: ["22", "4", "NaN", "undefined"],
        correct: 0
    },
    {
        question: "How do you access the first element in an array called 'arr'?",
        answers: ["arr[0]", "arr.first()", "arr.get(0)", "arr.first"],
        correct: 0
    },
    {
        question: "Which operator is used to compare both value and type in JavaScript?",
        answers: ["==", "=", "===", "!="],
        correct: 2
    },
    {
        question: "What does the 'this' keyword refer to in a method?",
        answers: ["The object that is calling the method", "The function itself", "The global object", "The parent object"],
        correct: 0
    },
    {
        question: "What will `typeof []` return?",
        answers: ["'array'", "'object'", "'list'", "'undefined'"],
        correct: 1
    },
    {
        question: "How can you check if a variable 'x' is an array?",
        answers: ["Array.isArray(x)", "x.isArray()", "typeof x === 'array'", "x instanceof Array"],
        correct: 0
    },
    {
        question: "Which method adds one or more elements to the end of an array and returns the new length?",
        answers: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0
    },
    {
        question: "How do you write a single-line comment in JavaScript?",
        answers: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
        correct: 0
    },
    {
        question: "What is the purpose of the 'break' statement in a loop?",
        answers: ["To exit the loop", "To skip the current iteration", "To start the loop again", "To continue to the next iteration"],
        correct: 0
    },
    {
        question: "How do you create an object in JavaScript?",
        answers: ["const obj = {}", "const obj = []", "const obj = new Object()", "const obj = Object.create()"],
        correct: 0
    },
    {
        question: "What will `0 == '0'` return?",
        answers: ["true", "false", "undefined", "NaN"],
        correct: 0
    },
    {
        question: "Which function is used to execute a function after a delay?",
        answers: ["setTimeout()", "setInterval()", "executeLater()", "delayFunction()"],
        correct: 0
    },
    {
        question: "What will `typeof null` return?",
        answers: ["'object'", "'null'", "'undefined'", "'number'"],
        correct: 0
    },
    {
        question: "How do you convert a string to a number in JavaScript?",
        answers: ["Number()", "parseInt()", "parseFloat()", "All of the above"],
        correct: 3
    },
    {
        question: "Which method removes the last element from an array and returns it?",
        answers: ["pop()", "push()", "shift()", "unshift()"],
        correct: 0
    },
    {
        question: "What will `3 ** 2` output?",
        answers: ["9", "6", "8", "3^2"],
        correct: 0
    },
    {
        question: "Which keyword is used to define a constant in JavaScript?",
        answers: ["const", "let", "var", "fixed"],
        correct: 0
    },
    {
        question: "What will `false + 1` output?",
        answers: ["1", "0", "NaN", "undefined"],
        correct: 0
    },
    {
        question: "Which operator is used to perform a logical AND operation?",
        answers: ["&&", "||", "!", "&"],
        correct: 0
    },
    {
        question: "How do you handle errors in JavaScript?",
        answers: ["try...catch", "throw...catch", "error...catch", "handle...error"],
        correct: 0
    },
    {
        question: "What is the result of `typeof NaN`?",
        answers: ["'number'", "'NaN'", "'undefined'", "'object'"],
        correct: 0
    },
    {
        question: "How do you remove the first element from an array?",
        answers: ["shift()", "pop()", "unshift()", "splice()"],
        correct: 0
    },
    {
        question: "Which method will remove all whitespace from both ends of a string?",
        answers: ["trim()", "strip()", "cut()", "clean()"],
        correct: 0
    },
    {
        question: "What is the purpose of the 'continue' statement in a loop?",
        answers: ["To skip the current iteration and continue with the next", "To exit the loop", "To restart the loop", "To pause the loop"],
        correct: 0
    },
    {
        question: "How do you access the value of a query parameter in the URL?",
        answers: ["window.location.search", "document.location.href", "window.location.hash", "document.location.search"],
        correct: 0
    },
    {
        question: "Which method is used to sort the elements of an array?",
        answers: ["sort()", "order()", "arrange()", "sequence()"],
        correct: 0
    },
    {
        question: "How do you check if a variable 'x' is undefined?",
        answers: ["x === undefined", "typeof x === 'undefined'", "x.isUndefined()", "Both 1 and 2"],
        correct: 3
    },
    {
        question: "What will `!!0` return?",
        answers: ["false", "true", "0", "undefined"],
        correct: 0
    },
    {
        question: "How do you access the length of an array?",
        answers: ["arr.length", "arr.size", "arr.count", "arr.total"],
        correct: 0
    },
    {
        question: "What does JSON stand for?",
        answers: ["JavaScript Object Notation", "JavaScript Online Notation", "JavaScript Original Notation", "JavaScript Output Notation"],
        correct: 0
    },
    {
        question: "Which method adds one or more elements to the beginning of an array?",
        answers: ["unshift()", "push()", "pop()", "shift()"],
        correct: 0
    },
    {
        question: "How do you create a new array with a portion of an existing array?",
        answers: ["slice()", "splice()", "spliceArray()", "copy()"],
        correct: 0
    },
    {
        question: "Which function returns a string representation of an array?",
        answers: ["toString()", "join()", "convert()", "stringify()"],
        correct: 0
    },
    {
        question: "What is the result of `[] == ![]`?",
        answers: ["true", "false", "undefined", "NaN"],
        correct: 0
    },
    {
        question: "Which keyword is used to declare a block-scoped variable?",
        answers: ["let", "var", "const", "static"],
        correct: 0
    },
    {
        question: "How do you create a promise in JavaScript?",
        answers: ["new Promise()", "Promise.create()", "Promise.new()", "new Async()"],
        correct: 0
    },
    {
        question: "What is the use of the 'bind' method in JavaScript?",
        answers: ["To create a new function with a specific 'this' context", "To bind two functions together", "To attach an event listener", "To make a function asynchronous"],
        correct: 0
    },
    {
        question: "Which method is used to find the index of an element in an array?",
        answers: ["indexOf()", "findIndex()", "searchIndex()", "getIndex()"],
        correct: 0
    },
    {
        question: "What is the result of `'5' - 3`?",
        answers: ["2", "53", "undefined", "NaN"],
        correct: 0
    },
    {
        question: "Which operator is used to perform a logical NOT operation?",
        answers: ["!", "&&", "||", "=="],
        correct: 0
    },
    {
        question: "How do you define an arrow function?",
        answers: ["() => {}", "function() {}", "=> function {}", "function => {}"],
        correct: 0
    },
    {
        question: "What does the `JSON.stringify()` method do?",
        answers: ["Converts a JavaScript object to a JSON string", "Parses a JSON string into a JavaScript object", "Converts an array into a string", "Formats a string into JSON"],
        correct: 0
    },
    {
        question: "Which method can be used to add an event listener to an element?",
        answers: ["addEventListener()", "attachEvent()", "onEvent()", "bindEvent()"],
        correct: 0
    },
    {
        question: "How do you define a class in JavaScript?",
        answers: ["class MyClass {}", "function MyClass() {}", "var MyClass = class {}", "define class MyClass {}"],
        correct: 0
    },
    {
        question: "What is the output of `console.log('a' + + 'b')`?",
        answers: ["'aNaN'", "'ab'", "'a0b'", "'a NaN'"],
        correct: 0
    },
    {
        question: "Which method is used to concatenate two arrays?",
        answers: ["concat()", "append()", "merge()", "combine()"],
        correct: 0
    },
    {
        question: "What is the purpose of the 'map' method in JavaScript?",
        answers: ["To create a new array by applying a function to each element", "To find the maximum value in an array", "To filter out elements from an array", "To sort the elements of an array"],
        correct: 0
    },
    {
        question: "What does the 'catch' method do in a promise?",
        answers: ["Handles errors in a promise", "Executes when the promise is resolved", "Returns a new promise", "Cancels the promise"],
        correct: 0
    },
    {
        question: "How do you create a new instance of an object in JavaScript?",
        answers: ["new Object()", "Object.create()", "Object.new()", "Object.instance()"],
        correct: 0
    },
    {
        question: "What will `!!'false'` output?",
        answers: ["true", "false", "undefined", "NaN"],
        correct: 0
    },
    {
        question: "Which method is used to find the first element that satisfies a condition in an array?",
        answers: ["find()", "filter()", "some()", "every()"],
        correct: 0
    },
    {
        question: "How do you convert a value to a boolean in JavaScript?",
        answers: ["Boolean()", "toBoolean()", "convertToBoolean()", "bool()"],
        correct: 0
    },
    {
        question: "Which method is used to join all elements of an array into a string?",
        answers: ["join()", "combine()", "concat()", "merge()"],
        correct: 0
    },
    {
        question: "What will `typeof [1, 2, 3]` return?",
        answers: ["'array'", "'object'", "'list'", "'number'"],
        correct: 1
    },
    {
        question: "How do you create a new object that inherits from another object?",
        answers: ["Object.create()", "Object.inherit()", "Object.extend()", "Object.clone()"],
        correct: 0
    },
    {
        question: "What is the result of `true + 1`?",
        answers: ["2", "true1", "undefined", "NaN"],
        correct: 0
    },
    {
        question: "How do you remove a property from an object?",
        answers: ["delete obj.property", "remove obj.property", "obj.remove('property')", "obj.delete('property')"],
        correct: 0
    },
    {
        question: "Which method converts a JavaScript object to a JSON string?",
        answers: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.objectify()"],
        correct: 0
    },
    {
        question: "What will `0 == false` return?",
        answers: ["true", "false", "undefined", "NaN"],
        correct: 0
    },
    {
        question: "How do you create a shallow copy of an array?",
        answers: ["slice()", "copy()", "clone()", "duplicate()"],
        correct: 0
    },
    {
        question: "Which method is used to iterate over each element in an array?",
        answers: ["forEach()", "map()", "filter()", "reduce()"],
        correct: 0
    },
    {
        question: "What is the output of `typeof {} + typeof []`?",
        answers: ["'objectobject'", "'objectarray'", "'objectundefined'", "'undefinedobject'"],
        correct: 0
    }
];


let currentQuestionIndex = 0;
let score = 0;
let timer;
const timePerQuestion = 15; // seconds

document.addEventListener("DOMContentLoaded", () => {
    showQuestion();
});
