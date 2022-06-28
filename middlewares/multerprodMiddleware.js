const path = require('path');
const multer = require('multer');

let storage=multer.diskStorage({
    destination: (req,res,cb)=>{
        const rutaimagenes = path.join(__dirname,('../public/images/products'));
        cb(null, rutaimagenes);
    },
    filename: (req,file,cb)=>{
        const fileName=`${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,fileName);
    }
})
const uploadFile = multer({storage});
module.exports = uploadFile;