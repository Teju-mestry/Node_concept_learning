var fs = require('fs')

var data = {
    name: 'Tejashree'
}

fs.writeFile('data.json', JSON.stringify(data), (err) => {
    console.log("writted in file")
})