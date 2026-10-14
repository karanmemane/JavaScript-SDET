//we are going to learn conditions in typescript

//if else statement
let age: number = 18;

if (age >= 18) {
      console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//switch statement
let day: string = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    default:
        console.log("It's another day.");
}                   