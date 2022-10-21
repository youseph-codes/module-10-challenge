const Employee = require("../lib/Employee.js")

test("employee name", () => {
    const employee = new Employee("Youssoupha", "2", "youseph@gmail.com")
    expect(employee.name).toBe("Youssoupha")
})