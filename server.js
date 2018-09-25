const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
// app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, "public")));

// app.get('/', (req, res) => res.sendFile('index.html')


require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

app.listen(PORT, () => {
    console.log(
        `App is listening on port ${PORT} @ ${new Date().toLocaleString()}`
    );
});