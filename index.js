const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 3001
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post("/", (req,res) => {
    let data = req.body;
    let a = data.a;
    let b = data.b;
    let op = data.op;
    console.log(data)
    console.log(op);
    let c = 0;
    switch(op){
        case "+":{
            c = a + b
            break;
        }
        case "-":{
            c = a - b
            break;
        }
        case "*":{
            c = a * b
            break;
        }
        case "/":{
            c = a / b
            break;
        }
    }
    let answer = {
        c: c
    }
    res.send(answer)
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
