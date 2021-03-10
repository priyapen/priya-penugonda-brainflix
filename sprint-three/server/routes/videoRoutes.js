const express = require('express');
const router = express.Router();
const fs = require('fs');
const uniqid = require('uuid');

console.log("hello from videoRoutes!");

// middleware
// router.use((req, res, next) => {
//     console.log("this is usage of router");
//     next();
// })

router.get("/videos", (req, res) => {
    console.log(res);
    const videoList = fs.readFileSync("./data/videos.json");
    const parsedData = JSON.parse(videoList);
    res.json(parsedData);
})

router.get("/videos/:id", (req, res) => {
    console.log(res);
    const videoList = fs.readFileSync("./data/video-details.json");
    const parsedData = JSON.parse(videoList);
    // const arrData = res.json(parsedData);
    const findObj = parsedData.find(obj => {
        if (obj.id === req.params.id) {
            return obj;
        }
    });
    res.json(findObj);
})


module.exports = router;