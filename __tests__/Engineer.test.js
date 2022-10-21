const Engineer = require("../lib/Engineer")

test("engineer name", () => {
    const engineer = new Engineer("Dainty", "5", "daintyfasho@gmail.com", "fasho-dainty")
    expect(engineer.name).toBe("Dainty")
})