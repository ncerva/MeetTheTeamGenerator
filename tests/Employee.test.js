const Employee = require("../lib/Employee");

describe("Name", ()=>{
    it("Should require employee name", ()=>{
        const str = "John";
        const result = new Employee().describe(str);
        expect(result).toEqual(str);
    });
});
describe("Id", ()=>{
    it("Should prompt ID", ()=>{
        const num = 24601;
        const result = new Employee().describe(num);
        expect(result).toEqual(num);
    });
});
describe("Email", ()=>{
    it("Should require email", ()=>{
        const str = "test@email.com";
        const result = new Employee().describe(str);
        expect(result).toEqual(str);
    });
});
describe("Role", ()=>{
    it("Should require a role", ()=>{       
        const str = "Role";
        const result = new Employee().describe(str);
        expect(result).toEqual(str);
    });
});