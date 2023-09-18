const fs = require("fs")

fs.writeFile("./test.txt", "hello gello",(error)=>console.log(error))

fs.appendFileSync("./test.txt", "this is appending")
fs.cpSync("./test.txt","./test1.txt")
console.log(fs.readFileSync("./test.txt","utf-8"))
fs.unlinkSync("./test1.txt")