const Engineer = require("../lib/Engineer");

test("Name", ()=>{
    if("Should require Engineer name", ()=>{
        const str = "Paul";
        const result = new Engineer().describe(str);
        expect(result).toEqual(str);
    });
});
test("Id", ()=>{
    if("Should prompt ID", ()=>{
        const num = 24601;
        const result = new Engineer().describe(num);
        expect(result).toEqual(num);
    });
});
test("Email", ()=>{
    if("Should require email", ()=>{
        const str = "test@email.com";
        const result = new Engineer().describe(str);
        expect(result).toEqual(str);
    });
});
test("Github", ()=>{
    if("Should require Github Username", ()=>{       
        const str = "Github Username";
        const result = new Engineer().describe(str);
        expect(result).toEqual(str);
    });
});
test("Role", ()=>{
    if("Should require a role", ()=>{       
        const str = "Role";
        const result = new Engineer().describe(str);
        expect(result).toEqual(str);
    });
});