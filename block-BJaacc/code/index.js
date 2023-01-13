// 1. Define a variable named `students` and assign a blank object to it.
let students = {};
// 2. Add a key of the value of variable `studentName` in the object created above with the value of your name.
let studentName = "Oly Rajak";
students.studentName = studentName;
// 3. Using `console.log` log the value of `studentName` key from the `students` object
console.log(students['studentName']);

// 4. Add a another key of the value of variable `batch` in the object with the value of 16.
let batch = 16;
students.batch = batch;
// 5. Using `console.log` log the value of `batch` key from the `students` object
console.log(students['batch']);
// 6. Add another key in the object with the value of the variable `isAdult`. The value of the key should be `true/false`
let isAdult = true;
students.isAdult = isAdult;
// 7. Using `console.log` print the value of `isAdult` key from the `students` object
console.log(students['isAdult']);
// 8. Add a another key of `42` to the object with a value of `The answer to the meaning of life`.
students[42] = "The answer to the meaning of life";
// 9. Using `console.log` print the value of key `42` from the `students` object
console.log(students[42]);
// 10. Check the length of object named `students`.
students.length;
// 11. Can you define a key of `let or var` in any object? Reason.
// The let declaration declares a block-scoped local variable
// 
```js
let x = 0;
if (x === 1) {
    let x = 1;
  
    console.log(x);
//  expected output: 1
  }
  
  console.log(x);
  //  expected output: 0
```
    // var variable is the entire enclosing function
    ```js
function varTest() {
    var x = 2;
    {
      var x = 4;  // same variable!
      console.log(x);  // 4
    }
    console.log(x);  // 4
  }
```



    // The main difference between let and var is that scope of a variable defined with let is limited to the block in which it 
    // is declared while variable declared with var has the global scope.  
    ```js
var variable is the entire enclosing function and it is a global variable
but let is a block scope local variable
```

// 12. Delete the `isAdult` property from the object `students`. Also, print the object before or after deleting the property
console.log(students);
delete students.isAdult;
console.log(students);

// 13. Update the value of the key batch in the object `students` and print it using `console.log`
students['batch'] = 17;

console.log(students['batch']);
