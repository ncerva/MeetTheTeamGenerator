const Manager = require("../lib/Manager");

describe("Name", ()=>{
    it("Should require Manager name", ()=>{
        const str = "George";
        const result = new Manager().describe(str);
        expect(result).toEqual(str);
    });
});
describe("Id", ()=>{
    it("Should prompt ID", ()=>{
        const num = 24601;
        const result = new Manager().describe(num);
        expect(result).toEqual(num);
    });
});
describe("Email", ()=>{
    it("Should require email", ()=>{
        const str = "test@email.com";
        const result = new Manager().describe(str);
        expect(result).toEqual(str);
    });
});
describe("Office Number", ()=>{
    it("Should require office number", ()=>{
        const str = "210-123-1234";
        const result = new Manager().describe(str);
        expect(result).toEqual(str);
    });
});
describe("Role", ()=>{
    it("Should require a role", ()=>{       
        const str = "Role";
        const result = new Manager().describe(str);
        expect(result).toEqual(str);
    });
});