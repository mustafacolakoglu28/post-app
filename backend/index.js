const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();

dotenv.config();
app.use(bodyParser);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
