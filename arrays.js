let name = ["karan", "memane", "john", "doe"]; // Array
console.log(name[0]);
console.log(name[1]);

console.log(name.length); // Output: 4
console.log(name.push("smith")); // Output: 5
console.log(name); // Output: ["karan", "memane", "john", "doe", "smith"]
console.log(name.pop()); // Output: "smith"
console.log(name); // Output: ["karan", "memane", "john", "doe"]
console.log(name.indexOf("john")); // Output: 2
console.log(name.slice(1, 3)); // Output: ["memane", "john"]
console.log(name.join(", ")); // Output: "karan, memane, john, doe"

let numbers = [10, 20, 30];

console.log(numbers.push(40));
console.log(numbers.pop());
console.log(numbers.length);