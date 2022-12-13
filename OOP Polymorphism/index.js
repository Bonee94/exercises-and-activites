// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    let response;
    
    if (typeof input === 'number') {
      if (inRange(input, 90, 100)) {
        response = 'A';
      } else if (inRange(input, 80, 89)) {
        response = 'B';
      } else if (inRange(input, 70, 79)) {
        response = 'C';
      } else if (inRange(input, 60, 69)) {
        response = 'D';
      } else if (inRange(input, 0, 59)) {
        response = 'F';
      } else {
        response = "Error: Invalid input"
      }
      return response;
    }

    if (typeof input === 'string') {
      letterGrade = input.toUpperCase();

      if (letterGrade === 'A') {
        response = '90 - 100'
      } else if (letterGrade === 'B') {
        response = '80 - 89'
      } else if (letterGrade === 'C') {
        response = '70 - 79'
      } else if (letterGrade === 'D') {
        response = '60 - 69'
      } else if (letterGrade === 'F') {
        response = '0 - 59'
      } else {
        response = 'Error: Invalid input'
      }

      return response;
    }
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(99));
console.log('John.displayGrade():', John.displayGrade('A'));
