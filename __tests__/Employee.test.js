const Employee = require("../lib/Employee.js")

test("employee name", () => {
    const employee = new Employee("Youssoupha", "1", "youseph@gmail.com")
    expect(employee.name).toBe("Youssoupha")
})

test("employee id", () => {
    const employee = new Employee("Youssoupha", "1", "youseph@gmail.com")
    expect(employee.id).toBe("1")
})

test("employee email", () => {
    const employee = new Employee("Youssoupha", "1", "youseph@gmail.com")
    expect(employee.email).toBe("youseph@gmail.com")
})
