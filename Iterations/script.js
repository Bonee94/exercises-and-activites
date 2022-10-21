//WRITE YOUR CODE BELOW
var students = ['Neil', 'Mitchell', 'Abran', 'Caleb', 'Bunny']

console.log(students.length)


for (var i = 0; i < students.length; i++) { 
    console.log("Great to see you, " + students[i] + ".");
}


console.log('Reverse')

for (var i = students.length - 1; i >= 0; i--) {
    console.log('Great to see you, ' + students[i] + '.')
}