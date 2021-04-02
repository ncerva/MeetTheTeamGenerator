const Intern = require("../lib/Intern");

describe("Name", ()=>{
    it("Should require Intern name", ()=>{
        const str = "Ringo";
        const result = new Intern().describe(str);
        expect(result).toEqual(str);
    });
});
describe("Id", ()=>{
    it("Should prompt ID", ()=>{
        const num = 24601;
        const result = new Intern().describe(num);
        expect(result).toEqual(num);
    });
});
describe("Email", ()=>{
    it("Should require email", ()=>{
        const str = "test@email.com";
        const result = new Intern().describe(str);
        expect(result).toEqual(str);
    });
});
describe("School", ()=>{
    it("Should require school name", ()=>{       
        const str = "UTSA";
        const result = new Intern().describe(str);
        expect(result).toEqual(str);
    });
});
describe("Role", ()=>{
    it("Should require a role", ()=>{       
        const str = "Role";
        const result = new Intern().describe(str);
        expect(result).toEqual(str);
    });
});