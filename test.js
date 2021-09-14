
import express from "express"
import fs from "fs"
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);





const app = express()
app.get("/", function(reqest, response){
    const filePath = path.join(__dirname,'public','index.html')

    const ext = path.extname(filePath)

    let contentType = 'text/html'
    console.log(ext)
    switch(ext){
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            throw err
        }
        
        response.writeHead(200, {
            'Content-type': contentType
        })
        response.end(data)
    })
    
})
app.get("/contact",function(reqest, response){
    const filePath = path.join(__dirname,'public','contact.html')

    const ext = path.extname(filePath)

    let contentType = 'text/html'
    console.log(ext)
    switch(ext){
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default:
            contentType = 'text/html'
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            throw err
        }
        
        response.writeHead(200, {
            'Content-type': contentType
        })
        response.end(data)
    })
})
const PORT = process.env.PORT || 3000

app.listen(PORT)

