const multer = require("multer");
// const path =  require("path")

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/../upload')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

let upload = multer({ storage: storage })

module.exports = upload;