const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!  This is an update.'))
app.get('/andrew', function(req, res){
  res.send("<h2>Hello Andrew!</h2><p>How are you today?</p>");
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))