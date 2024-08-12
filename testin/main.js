const { readFile, writeFile } = require('fs')
const text1 = readFile('./testin/text1', 'utf8', (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("The data is written")
    }
})



const add = require('./model')
const sum = add.add(2,3) 
console.log(sum);
const writeFiles = writeFile('./testin/text1', `This was a success ${sum}`, (err) => {
    if(err) {
        console.log(err)
    }
    console.log("The file has been written")
})