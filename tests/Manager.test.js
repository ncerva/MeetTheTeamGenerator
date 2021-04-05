const Manager = require("../lib/Manager");

test("Name", ()=>{
    if("Should require Manager name", ()=>{
        const str = "George";
        const result = new Manager().describe(str);
        expect(result).toEqual(str);
    });
});
test("Id", ()=>{
    if("Should prompt ID", ()=>{
        const num = 24601;
        const result = new Manager().describe(num);
        expect(result).toEqual(num);
    });
});
test("Email", ()=>{
    if("Should require email", ()=>{
        const str = "test@email.com";
        const result = new Manager().describe(str);
        expect(result).toEqual(str);
    });
});
test("Office Number", ()=>{
    if("Should require office number", ()=>{
        const str = "210-123-1234";
        const result = new Manager().describe(str);
        expect(result).toEqual(str);
    });
});
test("Role", ()=>{
    if("Should require a role", ()=>{       
        const str = "Role";
        const result = new Manager().describe(str);
        expect(result).toEqual(str);
    });
});