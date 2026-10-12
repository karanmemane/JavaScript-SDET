function greet(name: string): void{
    console.log(`Hello, ${name}!`);
}

greet("Karan");

function hello(name: string, age:number): string{
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(hello("Karan", 25));