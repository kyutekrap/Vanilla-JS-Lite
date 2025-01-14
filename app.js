const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/api', express.static(path.join(__dirname, 'api')));
app.use('/asset', express.static(path.join(__dirname, 'asset')));
app.use('/view', express.static(path.join(__dirname, 'view')));
app.use('/code', express.static(path.join(__dirname, 'code')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
