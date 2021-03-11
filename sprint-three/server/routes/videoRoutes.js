const express = require('express');
const router = express.Router();
const fs = require('fs');
const {v4 : uuidv4} = require('uuid');

console.log("hello from videoRoutes!");

// middleware
// router.use((req, res, next) => {
//     console.log("this is usage of router");
//     next();
// })

router.get("/", (req, res) => {
    // console.log(res);
    const videoList = fs.readFileSync("./data/videos.json");
    const parsedData = JSON.parse(videoList);
    res.json(parsedData);
});

router.get("/:id", (req, res) => {
    // console.log(res);
    const videoList = fs.readFileSync("./data/video-details.json");
    const parsedData = JSON.parse(videoList);
    // const arrData = res.json(parsedData);
    const findObj = parsedData.find(obj => {
        if (obj.id === req.params.id) {
            return obj;
        }
    });
    res.json(findObj);
});


router.post("/", (req, res) => {
    console.log("this is the req body", req.body);
    const newVid = req.body;
    newVid.image = "http://localhost:8080/files/Upload-video-preview.jpg";
    // console.log(newVid);
    const videoList = fs.readFileSync("./data/videos.json");
    const parsedData = JSON.parse(videoList);
    console.log(parsedData);
    parsedData.push(newVid);
    fs.writeFileSync('./data/videos.json', JSON.stringify(parsedData));


    // const newVidDet = {

    // }


    res.json(newVid);
});

module.exports = router;