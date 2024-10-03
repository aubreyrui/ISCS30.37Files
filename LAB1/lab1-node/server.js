const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'infoform.html'))
});

app.post('/send-email', (req,res) => {
    console.log(req.body);
    res.send("Form received");
});

app.listen(PORT, () => {
    console.log('Server runnning on port ${PORT}')
});