const express = require('express');
const path = require('path');

const app = express();
const PUBLIC_FOLDER = path.join(__dirname, '..', 'app', 'public');

app.use(express.static(PUBLIC_FOLDER));

app.get('*', (_req, res) => {
    res.sendFile(path.join(PUBLIC_FOLDER, 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));
