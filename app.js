// FileSync (Sync)

const { log } = require('console');
const { readFileSync, writeFileSync } = require('fs');

// reads the content of the file
const firstText = readFileSync('./node.txt', 'utf8')
const secondText = readFileSync('./nodes.txt', 'utf8')

// generates and writes text in .txt file 
writeFileSync('./RESULT.txt', `This is the results ${firstText}`)

console.log(firstText, secondText)

console.log("The below is for Async FS")

const { readFile, writeFile } = require('fs');
readFile('./node.txt', 'utf8',(err, result) => {
    if(err) {
        console.log(err)
        return
    } else {
        console.log(result)
    }
})

writeFile('./async.txt', `This is the async version of the text`,'utf8', (err, result) => {
    if(err) {
        console.log(err)
    } 
    const first = result
    readFile('./RESULT.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    })
})