const Engineer = require("../lib/Engineer");

describe("Name", ()=>{
    it("Should require Engineer name", ()=>{
        const str = "Paul";
        const result = new Engineer().describe(str);
        expect(result).toEqual(str);
    });
});
describe("Id", ()=>{
    it("Should prompt ID", ()=>{
        const num = 24601;
        const result = new Engineer().describe(num);
        expect(result).toEqual(num);
    });
});
describe("Email", ()=>{
    it("Should require email", ()=>{
        const str = "test@email.com";
        const result = new Engineer().describe(str);
        expect(result).toEqual(str);
    });
});
describe("Github", ()=>{
    it("Should require Github Username", ()=>{       
        const str = "Github Username";
        const result = new Engineer().describe(str);
        expect(result).toEqual(str);
    });
});
describe("Role", ()=>{
    it("Should require a role", ()=>{       
        const str = "Role";
        const result = new Engineer().describe(str);
        expect(result).toEqual(str);
    });
});