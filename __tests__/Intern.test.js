const Intern = require("../lib/Intern")

test("intern name", () => {
    const intern = new Intern("Eric", "4", "ericreally@gmail.com", "Columbia")
    expect(intern.name).toBe("Eric")
})