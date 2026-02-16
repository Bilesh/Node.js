const http = require('http');
// const Server = http.createServer();
const sumHandler = require('./sum');
const Server = http.createServer(sumHandler);



const PORT = 3000;
Server.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
})
