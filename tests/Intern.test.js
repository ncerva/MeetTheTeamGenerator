const Intern = require("../lib/Intern");

test("Name", ()=>{
    if("Should require Intern name", ()=>{
        const str = "Ringo";
        const result = new Intern().describe(str);
        expect(result).toEqual(str);
    });
});
test("Id", ()=>{
    if("Should prompt ID", ()=>{
        const num = 24601;
        const result = new Intern().describe(num);
        expect(result).toEqual(num);
    });
});
test("Email", ()=>{
    if("Should require email", ()=>{
        const str = "test@email.com";
        const result = new Intern().describe(str);
        expect(result).toEqual(str);
    });
});
test("School", ()=>{
    if("Should require school name", ()=>{       
        const str = "UTSA";
        const result = new Intern().describe(str);
        expect(result).toEqual(str);
    });
});
test("Role", ()=>{
    if("Should require a role", ()=>{       
        const str = "Role";
        const result = new Intern().describe(str);
        expect(result).toEqual(str);
    });
});