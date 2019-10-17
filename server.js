const express = require('express');
const app = express();
const PORT = 4567;

app.use(express.json());

app.listen(PORT, console.log(`prrrring on port ${PORT}`));
