interface user{// what is interface in typescript
    username: string;   
    password: string;
    active: boolean;
}

let user1: user = {
    username: "Karan",
    password: "password123",
    active: true
};

let user2: user = {
    username: "Karan",
    password: "password123",
    active: true
};

console.log(user1);
console.log(user1.username);
console.log(user1.password);
console.log(user1.active);

console.log(user2);
console.log(user2.username);
console.log(user2.password);
console.log(user2.active);