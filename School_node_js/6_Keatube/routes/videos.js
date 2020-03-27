// router 
const router = require("express").Router();
// const uuid4 = require("uuid").v4;

// module in node 
const crypto = require("crypto");

//package 
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "videos/");
        //console.log(file);
    },
    
    // req contains the form data, file contains the file and cb is "callback" function
    filename: (req, file, cb) =>{        
        //anders way to get extension
        const mimetypeArray = file.mimetype.split("/");
        const fileName = crypto.randomBytes(16).toString("hex");
        const extension = mimetypeArray[mimetypeArray.lenght -1]; 
        //const extension = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        
        // checks for the correct videoformats 
        if (mimetypeArray[0] === "video") {

            
            cb(null, fileName + "." + extension); 
            //cb(null, `${fileName}${extension}`); 
            
            console.log("OK " + fileName+extension);
        } else {
            console.log("ERROR this is not a video");
        }
        
    }

});

const upload = multer({ storage: storage });



// used for unique id
//console.log(uuid4());

// what data do we want in our videos array? {}, ok but what keys and values.
const videos = [{
    id: "1", 
    title: "NightSky", 
    description: "this is good", 
    category: "nature", 
    fileName: "400d05ae-c4c9-4156-9b48-d92ea9476530.mp4",
    thumbnail: "",
    uploadDate: "20/3-2020", 
    tags: ["stars", "sky"]
},

{  }

];

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
    // videos ... get 1 video with that unique videoId
    // get the videoId: req.params.videoId
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
});

router.post("/videos", upload.single("uploadedVideo"), (req, res) => {
    return res.redirect("/");

});

router.post("/test", (req, res) => {
    console.log(req.body.user);
    return res.redirect("/");

});

module.exports = router;