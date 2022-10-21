const Employee = require("./Employee")
class Engineer extends Employee {
    constructor(name, id, email, gitUser) {
        super(name, id, email)
        this.github = gitUser
    }

    getGithub() {
        return `Github Username: <a href="https://github.com/${this.github}" target="_blank">github.com/${this.github}</a>`
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer