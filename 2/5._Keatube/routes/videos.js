const router = require("express").Router();

const crypto = require("crypto");

const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "videos/");
    },
    filename: (req, file, cb) => {
        const mimetypeArray = file.mimetype.split("/");

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

const videos = [{ 
                title: "Night Sky",
                thumbnail: "", 
                description: "Watch this beautiful sky and enjoy the stars",
                fileName: "29a4415c-81c3-45ca-b95f-fe18c74998a0.mp4",
                uploadDate: "", 
                category: "Science", 
                tags: ["stars", "sky"] 
            }];

const videosPerPage = 12;

router.get("/videos", (req, res) => {
    const page = Number(req.query.page) ? Number(req.query.page) : 1;
    const start = (page - 1) * videosPerPage;
    const end = start + videosPerPage;

    return res.send({ response: videos.slice(start, end) });
});

router.get("/videos/:videoId", (req, res) => {
    return res.send({ response: videos.find(video => video.fileName === req.params.videoId) });
});

router.post("/videos", upload.single("uploadedVideo"), (req, res) => {
    const video = {
        title: req.body.title.trim(),
        description: req.body.description,
        thumbnail: "",
        fileName: req.file.filename,
        uploadDate: new Date(),
        category: req.body.category,
        tags: req.body.tags.split(/\s*[,\s]\s*/),
    };




    /* Validation */
    const titleMaxLength = 128; 

    if (video.title.length === 0 || video.title.length > titleMaxLength) {
        return res.status(400).send({ response: `Title cannot be empty or above ${titleMaxLength} chars.`});
    }
    
    const descriptionMaxLength = 2048;

    if (video.description.length > descriptionMaxLength) {
        return res.status(400).send({ response: `Description cannot be above ${titleMaxLength} chars.`});
    }

    const fileSizeLimit = 262144000;

    if (req.file.size > fileSizeLimit) {
        return res.status(400).send({ response: `The video is bigger than ${fileSizeLimit} bytes.`});
    }

    /* Add video */
    videos.push(video);

    return res.redirect("/");
});

module.exports = router;