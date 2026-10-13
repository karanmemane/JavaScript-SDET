
type TestCase = {
    name: string;
    status: "Pass" | "Fail" | "Blocked";
    priority: number;
    automated: boolean;
};

const test1: TestCase = {
    name: "Login Test",
    status: "Pass",
    priority: 1,
    automated: true
};

console.log(test1);