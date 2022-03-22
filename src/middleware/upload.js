const multer = require("multer");
let storage = multer.diskStorage({
  destination: 'public/assets/avatar',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-petshop-${file.originalname}`);
  },
});
let uploadFile = multer({ storage: storage});
module.exports = uploadFile;