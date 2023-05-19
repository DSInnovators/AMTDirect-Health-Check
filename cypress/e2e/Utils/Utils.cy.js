export class Utils {
    Utils() {

    }
    writeJson(fileName, valArray) {
        var obj = new Array()
        obj.push(valArray)
        cy.writeFile(fileName, JSON.stringify(obj))

    }
    appendJson(fileName, val) {
        cy.readFile(fileName).then((data) => {
            data.push(val)
            cy.writeFile(fileName, JSON.stringify(data))
        })
    }
    readJson(fileName) {
        var table = new Array();
        table = fetch(fileName)
        return table;


    }
}