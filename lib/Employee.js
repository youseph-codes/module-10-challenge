class Employee {
    constructor(passedName, passedID, passedEmail) {
        this.name = passedName,
        this.id = passedID,
        this.email = passedEmail
    }

    getName() {
        return `${this.name}`
    }

    getID() {
        return `Employee ID Number: ${this.id}`
    }

    getEmail() {
        return `Email: <a href="mailto:${this.email}">${this.email}</a>`
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee