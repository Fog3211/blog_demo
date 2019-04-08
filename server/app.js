const express = require ('express');
const bodyParser = require ('body-parser');

const app = express ();
const PORT = 3000;
app.use (bodyParser.json ());
app.use (
  bodyParser.urlencoded ({
    extended: true,
  })
);

app.get ('/get_msg', (req, res) => {
  let data = req.query;
  let str = data.ID.toString ().split ('');
  res.send ({
    code: 200,
    data: {
      ID: str.reverse ().join (''),
    },
  });
});
app.post ('/post_msg', (req, res) => {
  let data = req.body;
  let str = data.ID.toString ().split ('');
  res.send ({
    code: 200,
    data: {
      ID: str.reverse ().join (''),
    },
  });
});

app.listen (PORT, function () {
  console.log (PORT + ' is listening');
});
