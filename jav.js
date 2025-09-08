function introducePerson(name, age) {
  return `Hi, I'm ${name} and I'm ${age} years old!`;
}

const result1 = introducePerson("Alice", 25);
const result2 = introducePerson("Bob", 30);

console.log(result1);
console.log(result2);

// - What are 'name' and 'age' in the function definition?
// They are parameters that allow different values to be placed.//

// - What are "Alice", 25, "Bob", 30 when you call the function?
// They are arguments.//

// - What's the fundamental difference between these two?
//Parameters act like variables that hold values that are passed as arguments while Arguments are the real values//

function createProfile(username, role = "user", isActive = true) {
  return {
    username: username,
    role: role,
    isActive: isActive,
  };
}

const profile1 = createProfile("john123");
console.log(profile1);
const profile2 = createProfile("admin456", "administrator");
console.log(profile2);
const profile3 = createProfile("guest789", "guest", false);
console.log(profile3);

// - Why are default values useful in real applications?
//They allow us to provide sensible defaults for optional parameters and ensure consistency by acting as fall backs for missing information.//

// - What happens when you skip middle parameters?
//when one skips the middle parameters, javaScript uses the defaul values defined for the specific parameter.in a situation where we do not have default values the code results to run time errors.//

// - How do default values make your functions more flexible?
//Default values enables functions to handle different input scenarios without requiring the user to always specify every arguments.//

//Discussion Starter: In JavaScript, functions aren't just tools - they're "first-class citizens." This means they can do everything other values can do.

// What do you think this means?
//It just means you can treat functions like regular values—like numbers or strings.//

// How is this different from languages where functions are just "procedures"?
//In JavaScript,you can snap functions together in endless ways to build dynamic, modular systems.//

const square = function (num) {
  return num * num;
};
console.log("square of 5:", square(5));

const mathOperation = [
  function add(a, b) {
    return a + b;
  },
  function subtract(a, b) {
    return a - b;
  },
  function multiply(a, b) {
    return a * b;
  },
  function divide(a, b) {
    return a / b;
  },
];

function calculator(a, b, operation) {
  return operation(a, b);
}
console.log(calculator(5, 3, mathOperation[0])); // ➜ 8
console.log(calculator(5, 3, mathOperation[2])); // ➜ 15
