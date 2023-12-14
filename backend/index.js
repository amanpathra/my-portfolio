const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/cv', async (req, res) => {
    const filePath = path.join(__dirname, 'assets/Aman-Resume.pdf');

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${encodeURIComponent('your-file-name.pdf')}`);
    
    const fileStream = fs.createReadStream(filePath);
    console.log(fileStream)
    fileStream.pipe(res);
})

app.listen(8000, () => {
    console.log(`Server has been started.`)
})