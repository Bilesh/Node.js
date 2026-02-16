const finalSum = (req, res) => {
  console.log("You are in finalSum");
  const body = [];

  req.on('data', chunk => body.push(chunk));

  req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);

    const result = Number(bodyObj.First) + Number(bodyObj.Second);

    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Result: ${result}</h1>`);
    res.end();  
  });
}

module.exports = finalSum;
