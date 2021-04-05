const Employee = require("../lib/Employee");

test("Name", ()=>{
    if("Should require employee name", ()=>{
        const str = "John";
        const result = new Employee().describe(str);
        expect(result).toEqual(str);
    });
});
test("Id", ()=>{
    if("Should prompt ID", ()=>{
        const num = 24601;
        const result = new Employee().describe(num);
        expect(result).toEqual(num);
    });
});
test("Email", ()=>{
    if("Should require email", ()=>{
        const str = "test@email.com";
        const result = new Employee().describe(str);
        expect(result).toEqual(str);
    });
});
test("Role", ()=>{
    if("Should require a role", ()=>{       
        const str = "Role";
        const result = new Employee().describe(str);
        expect(result).toEqual(str);
    });
});