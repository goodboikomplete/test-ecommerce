const express = require('express');
const app = express();

app.get('/api/teddies', (req, res)=>{
	res.json({todo: 'hello world'})
});

app.listen(3000);
console.log('Listening on localhost:3000');

