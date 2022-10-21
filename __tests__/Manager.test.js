const Manager = require("../lib/Manager")

test("manager name", () => {
    const manager = new Manager("John", "3", "realjohn@gmail.com", "201")
    expect(manager.name).toBe("John")
})