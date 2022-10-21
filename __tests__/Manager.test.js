const Manager = require("../lib/Manager")

test("manager name", () => {
    const manager = new Manager("John", "2", "realjohn@gmail.com", "101")
    expect(manager.name).toBe("John")
})

test("manager id", () => {
    const manager = new Manager("John", "2", "realjohn@gmail.com", "101")
    expect(manager.id).toBe("2")
})

test("manager email", () => {
    const manager = new Manager("John", "2", "realjohn@gmail.com", "101")
    expect(manager.email).toBe("realjohn@gmail.com")
})

test("manager office number", () => {
    const manager = new Manager("John", "2", "realjohn@gmail.com", "101")
    expect(manager.officeNumber).toBe("101")
})