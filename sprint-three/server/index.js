const express = require("express");
const app = express();
const PORT = 8080;
const videoRoutes = require("./routes/videoRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/files", express.static("files"));
app.use((_req, _res, next) => {
    console.log("Middleware running");
    next();
});
app.use("/", videoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});