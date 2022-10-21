const Intern = require("../lib/Intern")

test("intern name", () => {
    const intern = new Intern("Eric", "3", "ericreally@gmail.com", "Columbia")
    expect(intern.name).toBe("Eric")
})

test("intern id", () => {
    const intern = new Intern("Eric", "3", "ericreally@gmail.com", "Columbia")
    expect(intern.id).toBe("3")
})

test("intern email", () => {
    const intern = new Intern("Eric", "3", "ericreally@gmail.com", "Columbia")
    expect(intern.email).toBe("ericreally@gmail.com")
})

test("intern school", () => {
    const intern = new Intern("Eric", "3", "ericreally@gmail.com", "Columbia")
    expect(intern.school).toBe("Columbia")
})