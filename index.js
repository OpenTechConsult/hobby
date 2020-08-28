// init the express server
const express = require('express');
const app = express();
const port = 4567;


// allow cross origin domain request and json parsing
app.use(require('cors')());
app.use(require('body-parser').json());

// base route. Respond to GET requests to the root ('/')
app.get("/", (req, res) => {
    res.send("Home sweet home ");
});

// create a dynamic route parameter. Respond to GET requests to the root ('/')
app.get("/:user", (req, res) => {
    console.log(`[GET REQUEST TO /${user}] Sending back information about the user ${user}`)
});

// base route. Responds to POST request to the root route
app.post("/", (req, res) => {
    res.send("Send it through the post")
});

// Responds to PUT request to the root route
app.post("/", (req, res) => {
    res.send("Send it through the post")
});

app.listen(port, () => console.log(`Your app is listening on port ${port}!`));