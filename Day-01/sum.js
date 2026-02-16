const finalSum = require('./result');

function sumHandler(req,res){

  if(req.url === '/'){
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <header>
    <h1>
      Welcome to a Dumb Calculator that only performs Addition.
    </h1>
  </header>
      <form action="/result" method="POST">
        <input type="number" placeholder = "First Number" name="First">
        <input type="number" placeholder = "Second Number" name="Second">
        <input type="submit" value="Add">
      </form>
    `);
    return res.end();
  }

  else if(req.url === '/result' && req.method === 'POST'){
    return finalSum(req,res);
  }

  res.setHeader('Content-Type','text/html');
  res.write('<h1>404 ERROR</h1>');
  res.end();
}

module.exports = sumHandler;
