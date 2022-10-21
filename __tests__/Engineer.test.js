const Engineer = require("../lib/Engineer")

test("engineer name", () => {
    const engineer = new Engineer("Dainty", "4", "daintyfasho@gmail.com", "fasho-dainty")
    expect(engineer.name).toBe("Dainty")
})

test("engineer id", () => {
    const engineer = new Engineer("Dainty", "4", "daintyfasho@gmail.com", "fasho-dainty")
    expect(engineer.id).toBe("4")
})

test("engineer email", () => {
    const engineer = new Engineer("Dainty", "4", "daintyfasho@gmail.com", "fasho-dainty")
    expect(engineer.email).toBe("daintyfasho@gmail.com")
})

test("engineer github", () => {
    const engineer = new Engineer("Dainty", "4", "daintyfasho@gmail.com", "fasho-dainty")
    expect(engineer.github).toBe("fasho-dainty")
})