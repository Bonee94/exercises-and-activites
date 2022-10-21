// WRITE YOUR CODE HERE
var names = ["Mike", "Sarah", "Adam", "Olivia", "Eric"];

console.log(names.length);

console.log('Welcome to the group ' + (names[0]))
console.log('Welcome to the group ' + (names[1]))
console.log('Welcome to the group ' + (names[2]))
console.log('Welcome to the group ' + (names[3]))
console.log('Welcome to the group ' + (names[4]))

names[0] = "Bob"

if (names[0] === "Bob") {
console.log(names[0] + ' is in class.')
}