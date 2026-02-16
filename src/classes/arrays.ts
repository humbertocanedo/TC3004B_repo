let a,b,rest;

[a, b] = [10, 20];

console.log(a); // expected output 10
console.log(b); // expected output 20

[a, b, ...rest] = [30, 40, 50, 60, 70, 80];

console.log(rest); // expected output [50, 60, 70, 80]






const myArray: number[] = [1, 2, 3, 4, 5];
myArray.push(6);
console.log(myArray);

myArray.pop();
console.log(myArray);
