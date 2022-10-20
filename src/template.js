// create function to generate HTML file
function generateHtml(team) {
    console.log(team)
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <div class="container-fluid text-bg-primary p-3 text-center mb-2">
            <h1>My Team</h1>
        </div>
        <div class="d-flex justify-content-around p-3">
        ${team.map(teamMember => {
            let specialAttribute
            if(teamMember.getRole() === "Manager") specialAttribute = teamMember.()
            if(teamMember.getRole() === "Engineer") specialAttribute = teamMember.()
            if(teamMember.getRole() === "Intern") specialAttribute = teamMember.()
            return`
              <div class="card h-100 m-3 w-100">
            <div class="card-body text-bg-info text-center">
              <h4 class="card-title">${teamMember.getName()}</h4>
              <h5 class="card-text">${teamMember.getRole()}</h5>
            </div>
            <ul class="list-group list-group-flush text-center">
              <li class="list-group-item">${teamMember.getEmail()}</li>
              <li class="list-group-item">${teamMember.getId()}</li>
              <li class="list-group-item">${specialAttribute}</li>
            </ul>
            </div>
            `
        }) }
        </div>
    </body>
    </html> `
    }
    
    module.exports = generateHtml