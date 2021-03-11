const express = require("express");
const app = express();
const PORT = 8080;
const videoRoutes = require("./routes/videoRoutes");
const cors = require("cors");

app.use(cors());


app.use(express.json());

app.use("/files", express.static("files"));

// This middleware is just a basic example that runs on every request
// Calling next() is how you pass control to the next middleware
app.use((_req, _res, next) => {
    console.log("Middleware running");
    next();
});


// This middleware checks if we're getting JSON headers on our POST requests
// You can send a response right here and *not* call next() if you don't want to proceed.
// app.use((req, res, next) => {
//     // if (req.method === "POST" && req.headers["content-type"] !== "application/json") {
//     //     return res.status(400).send("Hey, you need to give me proper JSON");
//     // }

//     next();
// });


app.use("/", videoRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});