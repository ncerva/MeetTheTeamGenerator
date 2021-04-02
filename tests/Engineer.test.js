const Engineer = require("../lib/Engineer");

describe("Engineer", ()=>{
    it("Should require Engineer name", ()=>{
        const str = "Paul";
        const result = new Engineer().describe(str);
        expect(result).toEqual(str);
    });
});
describe("Engineer", ()=>{
    it("Should prompt ID", ()=>{
        const num = 24601;
        const result = new Engineer().describe(num);
        expect(result).toEqual(num);
    });
});
describe("Engineer", ()=>{
    it("Should require email", ()=>{
        const str = "test@email.com";
        const result = new Engineer().describe(str);
        expect(result).toEqual(str);
    });
});
describe("Engineer", ()=>{
    it("Should require a role", ()=>{       
        const str = "Role";
        const result = new Engineer().describe(str);
        expect(result).toEqual(str);
    });
});