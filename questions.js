const questions = [
    {
        number: 1,
        question: "What is the result of `typeof NaN`?",
        options: ["'number'", "'NaN'", "'undefined'", "'object'"],
        correct: "'number'"
    },
    {
        number: 2,
        question: "Which method is used to remove whitespace from both ends of a string?",
        options: ["trim()", "strip()", "cut()", "clean()"],
        correct: "trim()"
    },
    {
        number: 3,
        question: "What does `console.log(0.1 + 0.2 == 0.3)` output?",
        options: ["true", "false", "undefined", "NaN"],
        correct: "false"
    },
    {
        number: 4,
        question: "How do you declare a variable that can be reassigned?",
        options: ["var variableName;", "let variableName;", "const variableName;", "static variableName;"],
        correct: "let variableName;"
    },
    {
        number: 5,
        question: "What is the result of `Boolean('false')`?",
        options: ["true", "false", "undefined", "NaN"],
        correct: "true"
    },
    {
        number: 6,
        question: "How do you check if an object has a specific property?",
        options: ["object.hasOwnProperty('propertyName')", "object.contains('propertyName')", "object.includes('propertyName')", "object.get('propertyName')"],
        correct: "object.hasOwnProperty('propertyName')"
    },
    {
        number: 7,
        question: "What will `0 / 0` return?",
        options: ["0", "Infinity", "NaN", "undefined"],
        correct: "NaN"
    },]
//     {
//         number: 8,
//         question: "What does `parseFloat('10.5')` return?",
//         options: ["10", "10.5", "10.50", "NaN"],
//         correct: "10.5"
//     },
//     {
//         number: 9,
//         question: "What is the result of `'5' + 1`?",
//         options: ["51", "6", "undefined", "NaN"],
//         correct: "51"
//     },
//     {
//         number: 10,
//         question: "Which operator is used to perform a logical OR operation?",
//         options: ["||", "&&", "!", "&"],
//         correct: "||"
//     },
//     {
//         number: 11,
//         question: "How do you create a new array with elements `[1, 2, 3]` in JavaScript?",
//         options: ["const array = [1, 2, 3];", "const array = (1, 2, 3);", "const array = new Array(1, 2, 3);", "const array = Array(1, 2, 3);"],
//         correct: "const array = [1, 2, 3];"
//     },
//     {
//         number: 12,
//         question: "What is the result of `typeof [1, 2, 3]`?",
//         options: ["'array'", "'object'", "'list'", "'number'"],
//         correct: "'object'"
//     },
//     {
//         number: 13,
//         question: "Which method is used to add an item to the beginning of an array?",
//         options: ["unshift()", "push()", "pop()", "shift()"],
//         correct: "unshift()"
//     },
//     {
//         number: 14,
//         question: "How do you check if a variable `x` is undefined?",
//         options: ["x === undefined", "typeof x === 'undefined'", "x.isUndefined()", "Both 1 and 2"],
//         correct: "Both 1 and 2"
//     },
//     {
//         number: 15,
//         question: "What is the result of `false + 1`?",
//         options: ["1", "0", "NaN", "undefined"],
//         correct: "1"
//     },
//     {
//         number: 16,
//         question: "How do you create a function that returns the sum of two numbers?",
//         options: [
//             "function add(a, b) { return a + b; }",
//             "function add(a, b) { a + b; }",
//             "const add = (a, b) => a + b;",
//             "function add(a, b) { return a - b; }"
//         ],
//         correct: "function add(a, b) { return a + b; }"
//     },
//     {
//         number: 17,
//         question: "What will `typeof 'Hello'` return?",
//         options: ["'string'", "'object'", "'number'", "'undefined'"],
//         correct: "'string'"
//     },
//     {
//         number: 18,
//         question: "Which method is used to find the index of an element in an array?",
//         options: ["indexOf()", "findIndex()", "searchIndex()", "getIndex()"],
//         correct: "indexOf()"
//     },
//     {
//         number: 19,
//         question: "What is the purpose of the `return` statement in a function?",
//         options: [
//             "It specifies the value that will be returned by the function.",
//             "It exits the function without returning a value.",
//             "It loops through the function repeatedly.",
//             "It triggers an error in the function."
//         ],
//         correct: "It specifies the value that will be returned by the function."
//     },
//     {
//         number: 20,
//         question: "How do you remove the first element from an array?",
//         options: ["shift()", "pop()", "unshift()", "splice()"],
//         correct: "shift()"
//     },
//     {
//         number: 21,
//         question: "What does `JSON.stringify()` do?",
//         options: [
//             "Converts a JavaScript object to a JSON string.",
//             "Parses a JSON string into a JavaScript object.",
//             "Converts an array into a string.",
//             "Formats a string into JSON."
//         ],
//         correct: "Converts a JavaScript object to a JSON string."
//     },
//     {
//         number: 22,
//         question: "How do you concatenate two strings?",
//         options: ["string1 + string2", "string1.concat(string2)", "string1.append(string2)", "string1.merge(string2)"],
//         correct: "string1 + string2"
//     },
//     {
//         number: 23,
//         question: "Which keyword is used to define a constant?",
//         options: ["const", "let", "var", "fixed"],
//         correct: "const"
//     },
//     {
//         number: 24,
//         question: "What is the result of `!!'hello'`?",
//         options: ["true", "false", "undefined", "NaN"],
//         correct: "true"
//     },
//     {
//         number: 25,
//         question: "What is the result of `[] == ![]`?",
//         options: ["true", "false", "undefined", "NaN"],
//         correct: "true"
//     },
//     {
//         number: 26,
//         question: "Which method is used to join all elements of an array into a single string?",
//         options: ["join()", "combine()", "concat()", "merge()"],
//         correct: "join()"
//     },
//     {
//         number: 27,
//         question: "How do you create a new object in JavaScript?",
//         options: ["const obj = {};", "const obj = [];", "const obj = new Object();", "const obj = Object.create();"],
//         correct: "const obj = {};"
//     },
//     {
//         number: 28,
//         question: "What is the result of `typeof null`?",
//         options: ["'object'", "'null'", "'undefined'", "'number'"],
//         correct: "'object'"
//     },
//     {
//         number: 29,
//         question: "How do you access the last element of an array?",
//         options: ["array[array.length - 1]", "array.last()", "array[array.size - 1]", "array.get(-1)"],
//         correct: "array[array.length - 1]"
//     },
//     {
//         number: 30,
//         question: "What does `Array.isArray([1, 2, 3])` return?",
//         options: ["true", "false", "undefined", "NaN"],
//         correct: "true"
//     },
//     {
//         number: 31,
//         question: "How do you create a new promise in JavaScript?",
//         options: [
//             "new Promise((resolve, reject) => { /* code */ });",
//             "Promise.create(() => { /* code */ });",
//             "new Async(() => { /* code */ });",
//             "Promise.new(() => { /* code */ });"
//         ],
//         correct: "new Promise((resolve, reject) => { /* code */ });"
//     },
//     {
//         number: 32,
//         question: "What is the result of `0 == '0'`?",
//         options: ["true", "false", "undefined", "NaN"],
//         correct: "true"
//     },
//     {
//         number: 33,
//         question: "What does the `find()` method do in an array?",
//         options: ["Returns the first element that satisfies the provided testing function.", "Returns a new array with elements that pass the test.", "Finds the index of the first element that satisfies the test.", "Filters out elements that do not satisfy the test."],
//         correct: "Returns the first element that satisfies the provided testing function."
//     },
//     {
//         number: 34,
//         question: "How do you define a function expression in JavaScript?",
//         options: ["const myFunction = function() { /* code */ };", "function myFunction() { /* code */ }", "var myFunction = () => { /* code */ };", "function = myFunction() { /* code */ }"],
//         correct: "const myFunction = function() { /* code */ };"
//     },
//     {
//         number: 35,
//         question: "What is the result of `typeof []`?",
//         options: ["'object'", "'array'", "'list'", "'undefined'"],
//         correct: "'object'"
//     },
//     {
//         number: 36,
//         question: "What is the result of `1 + '1'`?",
//         options: ["'11'", "2", "11", "NaN"],
//         correct: "'11'"
//     },
//     {
//         number: 37,
//         question: "What does the `filter()` method do in an array?",
//         options: ["Creates a new array with all elements that pass the test implemented by the provided function.", "Returns a single value that is the result of applying the function to each element.", "Executes a provided function once for each array element.", "Finds the first element that satisfies a condition."],
//         correct: "Creates a new array with all elements that pass the test implemented by the provided function."
//     },
//     {
//         number: 38,
//         question: "How do you create a getter method in a class?",
//         options: ["get propertyName() { return this._property; }", "propertyName() { return this._property; }", "function get propertyName() { return this._property; }", "return propertyName() { return this._property; }"],
//         correct: "get propertyName() { return this._property; }"
//     },
//     {
//         number: 39,
//         question: "What is the result of `2 ** 3`?",
//         options: ["8", "6", "9", "undefined"],
//         correct: "8"
//     },
//     {
//         number: 40,
//         question: "How do you concatenate two arrays?",
//         options: ["array1.concat(array2)", "array1 + array2", "array1.merge(array2)", "array1.append(array2)"],
//         correct: "array1.concat(array2)"
//     },
//     {
//         number: 41,
//         question: "What will `typeof {}` return?",
//         options: ["'object'", "'function'", "'undefined'", "'array'"],
//         correct: "'object'"
//     },
//     {
//         number: 42,
//         question: "Which method is used to execute a function once for each element in an array?",
//         options: ["forEach()", "map()", "filter()", "reduce()"],
//         correct: "forEach()"
//     },
//     {
//         number: 43,
//         question: "How do you check if an object is an instance of a class?",
//         options: ["object instanceof ClassName", "object.isInstanceOf(ClassName)", "ClassName.isInstance(object)", "object.isInstance(ClassName)"],
//         correct: "object instanceof ClassName"
//     },
//     {
//         number: 44,
//         question: "What does `Object.keys()` return?",
//         options: ["An array of the object's property names.", "An array of the object's property values.", "An array of the object's methods.", "A string of the object's property names."],
//         correct: "An array of the object's property names."
//     },
//     {
//         number: 45,
//         question: "How do you define a class method in JavaScript?",
//         options: ["class MyClass { methodName() { /* code */ } }", "function MyClass.methodName() { /* code */ }", "class MyClass { static methodName() { /* code */ } }", "MyClass.methodName = function() { /* code */ }"],
//         correct: "class MyClass { methodName() { /* code */ } }"
//     },
//     {
//         number: 46,
//         question: "What does `Array.prototype.map()` return?",
//         options: ["A new array with the results of calling a provided function on every element.", "The original array with the function applied to each element.", "A single value obtained from reducing the array.", "A filtered array based on a condition."],
//         correct: "A new array with the results of calling a provided function on every element."
//     },
//     {
//         number: 47,
//         question: "What is the result of `NaN === NaN`?",
//         options: ["false", "true", "undefined", "NaN"],
//         correct: "false"
//     },
//     {
//         number: 48,
//         question: "How do you create a new empty array?",
//         options: ["const array = [];", "const array = new Array();", "const array = Array();", "const array = new Array([]);"],
//         correct: "const array = [];"
//     },
//     {
//         number: 49,
//         question: "How do you make a function return multiple values?",
//         options: ["Return an array or object with the values.", "Return a comma-separated list of values.", "Use multiple return statements.", "Return a string with concatenated values."],
//         correct: "Return an array or object with the values."
//     },
//     {
//         number: 50,
//         question: "What will `typeof []` return?",
//         options: ["'object'", "'array'", "'list'", "'undefined'"],
//         correct: "'object'"
//     }
// ];
