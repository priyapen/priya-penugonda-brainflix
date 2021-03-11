const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const LoremIpsum = require('lorem-ipsum');

console.log("hello from videoRoutes!");

// middleware
// router.use((req, res, next) => {
//     console.log("this is usage of router");
//     next();
// })

router.get("/videos", (req, res) => {
    // console.log(res);
    const videoList = fs.readFileSync("./data/videos.json");
    const parsedData = JSON.parse(videoList);
    res.json(parsedData);
});

router.get("/videos/:id", (req, res) => {
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


router.post("/videos", (req, res) => {
    console.log("this is the req body", req.body);
    const newVid = req.body;
    const imgpath = "http://localhost:8080/files/Upload-video-preview.jpg"
    newVid.image = imgpath;
    newVid.channel = "Pri vlogs";
    // console.log(newVid);
    const videoList = fs.readFileSync("./data/videos.json");
    const parsedData = JSON.parse(videoList);
    console.log(parsedData);
    parsedData.push(newVid);
    fs.writeFileSync('./data/videos.json', JSON.stringify(parsedData));


    const newVidDet = {
        // id: "",
        // title: "",
        // channel: “Pri’s Channel”,
        // image: "https://i.imgur.com/l2Xfgpl.jpg",
        // description: “Test description for Pri’s channel”,
        views: 0,
        likes: 0,
        duration: "4:01",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: [
            {
                "name": "Micheal Lyons",
                "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                "likes": 0,
                "timestamp": 1545162149000
            },
            {
                "name": "Gary Wong",
                "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                "likes": 0,
                "timestamp": 1544595784046
            },
            {
                "name": "Theodore Duncan",
                "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                "likes": 0,
                "timestamp": 1542262984046
            }
        ]
      }
    const vidDetail = Object.assign(newVid, newVidDet);
    console.log(vidDetail);
    const videoDetailsList = fs.readFileSync("./data/video-details.json");
    const parsedDetailData = JSON.parse(videoDetailsList);
    console.log(parsedDetailData);
    parsedDetailData.push(vidDetail);
    fs.writeFileSync('./data/video-details.json', JSON.stringify(parsedDetailData));
    res.json(newVid);
    res.json(vidDetail);
});

module.exports = router;