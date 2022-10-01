const http = require("http")


const server = http.createServer((req,res) => {
    console.log("new connection")
    res.end(" its work, its really work")
});


const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})
