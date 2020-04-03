// router 
// const uuid4 = require("uuid").v4;
const router = require("express").Router();

// module in node 
const crypto = require("crypto");

//package 
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "videos/");
    },
    // req contains the form data, file contains the file and cb is "callback" function
    filename: (req, file, cb) => {
        const mimetypeArray = file.mimetype.split("/");

        // checks for the correct videoformats 
        if (mimetypeArray[0] === "video") { 
            const extension = mimetypeArray[mimetypeArray.length - 1];
            const fileName = crypto.randomBytes(18).toString("hex");
            
            cb(null, fileName + "." + extension);
        } else {
            cb("Error: The file is not a video");
        }
    }
});

const upload = multer({ storage: storage });



// used for unique id
//console.log(uuid4());

// what data do we want in our videos array? {}, ok but what keys and values.
const videos = [{
    id: "", 
    title: "NightSky", 
    description: "this is good", 
    category: "nature", 
    fileName: "400d05ae-c4c9-4156-9b48-d92ea9476530.mp4",
    thumbnail: "",
    uploadDate: "20/3-2020", 
    tags: ["stars", "sky"]

}];


const videosPerPage = 12;

router.get("/videos", (req, res) => {
    // makes sure we get the correct value and if not goes to page 1 
    const page = Number(req.query.page) ? Number(req.query.page) : 1;
    // logic for our pagination 
    const start = (page - 1) * videosPerPage;
    //last page 
    const end = start + videosPerPage; 

    return res.send({ response: videos.slice(start, end) });
});

router.get("/videos/:videoId", (req, res) => {
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
});

router.post("/videos", upload.single("uploadedVideo"), (req, res) => {
    //console.log(req.body);
    //console.log(req.file);


    const video = {
        title: req.body.title.trim(),
        thumbnail: "",
        description: req.body.description,
        fileName: req.file.filename,
        uploadDate: new Date(),
        category: req.body.category,
        tags: req.body.tags.split(/\s*[,\s]\s*/)
        //tags: [ req.body.tags ]
    };

    /* Validation */
    const titleMaxLength = 128;

    if (video.title.length === 0 || video.title.length > titleMaxLength) {
        return res.status(400).send({ response: `Title cannot be empty or above ${titleMaxLength} chars.`});
    }
    
    const descriptionMaxLength = 2048;

    if (video.description.lenght > descriptionMaxLength) {
        return res.status(400).send({ response: `Description cannot be empty or above ${descriptionMaxLength} chars.`});
    }

    const fileSizeLimit = 262144000;


    if (req.file.size > fileSizeLimit) {
        return res.status(400).send({ response: `The video is bigger than ${fileSizeLimit} bytes.`});
    }

    /* pushes to our videos array */
    videos.push(video);

    return res.redirect("/");
});

module.exports = router;