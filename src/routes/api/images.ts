import express from "express";
import imageProcessor from "../../utilities/imageprocessor";

const images = express.Router();

images.get("/", (req: express.Request, res: express.Response) => {
    
    const name = String(req.query.name);
    const height = Number(req.query.height);
    const width = Number(req.query.width);
    
    try{
        imageProcessor.resizeImage(name, height, width)
        .then((data) => {
            if(data !== ""){
                res.status(200).sendFile(data);
            }
        })
        .catch(err => res.status(500).send(err));
    }
    catch(err){
        res.status(500).send(err.message);
    }
});

export default images;


